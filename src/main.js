import './style.css'

// 콘텐츠는 루트 index.html에서 수정합니다. 이 파일은 상호작용만 담당합니다.
const menuToggle = document.querySelector('.menu-toggle')
const navigation = document.querySelector('.site-nav')
const header = document.querySelector('.site-header')
const mobileViewport = window.matchMedia('(max-width: 760px)')

function setMenuOpen(isOpen) {
  menuToggle.setAttribute('aria-expanded', String(isOpen))
  menuToggle.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기')
  navigation.classList.toggle('is-open', isOpen)
}

menuToggle.addEventListener('click', () => {
  setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true')
})
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenuOpen(false)
})
document.addEventListener('click', (event) => {
  if (!header.contains(event.target)) setMenuOpen(false)
})
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false)
    menuToggle.focus()
  }
})
mobileViewport.addEventListener('change', () => setMenuOpen(false))

// JavaScript 또는 IntersectionObserver가 없어도 본문은 기본으로 표시됩니다.
const revealElements = document.querySelectorAll('.reveal')
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const revealObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        revealObserver.unobserve(entry.target)
      }
    }
  }, { threshold: 0.1 })
  revealElements.forEach((element) => {
    element.classList.add('will-reveal')
    revealObserver.observe(element)
  })
  reducedMotion.addEventListener('change', (event) => {
    if (event.matches) {
      revealElements.forEach((element) => element.classList.add('is-visible'))
      revealObserver.disconnect()
    }
  })
}

// 현재 읽고 있는 영역을 메뉴에서도 표시합니다.
if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        navigation.querySelectorAll('a').forEach((link) => {
          if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location')
          else link.removeAttribute('aria-current')
        })
      }
    }
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 })
  document.querySelectorAll('.section-anchor').forEach((section) => sectionObserver.observe(section))
}

// 실제 링크가 등록되기 전에는 준비 중 안내를 표시합니다.
const placeholderDialog = document.querySelector('.placeholder-dialog')
const placeholderDescription = document.querySelector('#placeholder-description')
document.querySelectorAll('[data-placeholder-title]').forEach((button) => {
  button.addEventListener('click', () => {
    const subject = button.dataset.placeholderTitle
    placeholderDescription.textContent = `${subject} 정보가 아직 등록되지 않았습니다. 내용이 준비되면 이곳에서 만나실 수 있어요.`
    placeholderDialog.showModal()
  })
})
document.querySelector('.dialog-close').addEventListener('click', () => placeholderDialog.close())
placeholderDialog.addEventListener('click', (event) => {
  const bounds = placeholderDialog.getBoundingClientRect()
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) placeholderDialog.close()
})
