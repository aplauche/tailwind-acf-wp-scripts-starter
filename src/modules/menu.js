export default function siteMenu() {
  const nav = document.getElementById('site-navigation')
  const button = document.getElementById('menu-toggle')

  button.addEventListener('click', () => {
    if(nav.getAttribute('data-nav-open') == 'false'){
      nav.setAttribute('data-nav-open', 'true')
      nav.classList.add('nav-expanded')
      button.setAttribute('aria-expanded', 'true')
      button.innerText = "Close"
    } else {
      nav.setAttribute('data-nav-open', 'false')
      nav.classList.remove('nav-expanded')
      button.setAttribute('aria-expanded', 'false')
      button.innerText = "Menu"
    }
  })

  window.addEventListener('resize', () => {
    if(window.innerWidth > 768){
      nav.setAttribute('data-nav-open', 'false')
      nav.classList.remove('nav-expanded')
      button.setAttribute('aria-expanded', 'false')
      button.innerText = "Menu"
    }
  })
}
