document.addEventListener('DOMContentLoaded', function () {
    console.log('Site carregado!');

    // Seleciona todos os itens com a classe has-children
// Seleciona todos os itens de menu com a classe 'has-children'
const menuItems = document.querySelectorAll('.has-children');

// Adiciona um evento de clique em cada item
menuItems.forEach(item => {
  item.addEventListener('click', function (e) {
    // Previne o comportamento padrão do link
    // e.preventDefault();

    // Fecha todos os outros submenus
    menuItems.forEach(otherItem => {
      if (otherItem !== this) {
        otherItem.classList.remove('active');
      }
    });

    // Alterna a classe 'active' no item clicado
    this.classList.toggle('active');
  });
});

});
