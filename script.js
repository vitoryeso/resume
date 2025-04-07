document.addEventListener('DOMContentLoaded', function() {
    // Obter elementos do DOM
    const ptBtn = document.getElementById('pt-btn');
    const enBtn = document.getElementById('en-btn');
    
    // Elementos com conteúdo específico de idioma
    const ptElements = document.querySelectorAll('.content-pt');
    const enElements = document.querySelectorAll('.content-en');
    
    // Elementos com atributos data-pt e data-en
    const elementsWithDataAttrs = document.querySelectorAll('[data-pt][data-en]');
    
    // Função para mudar para Português
    function switchToPT() {
        // Ativar botão PT e desativar botão EN
        ptBtn.classList.add('active');
        enBtn.classList.remove('active');
        
        // Mostrar elementos em português e ocultar elementos em inglês
        ptElements.forEach(el => el.style.display = 'block');
        enElements.forEach(el => el.style.display = 'none');
        
        // Atualizar elementos com data attributes
        elementsWithDataAttrs.forEach(el => {
            el.textContent = el.getAttribute('data-pt');
        });
        
        // Atualizar o idioma do documento
        document.documentElement.lang = 'pt-BR';
    }
    
    // Função para mudar para Inglês
    function switchToEN() {
        // Ativar botão EN e desativar botão PT
        enBtn.classList.add('active');
        ptBtn.classList.remove('active');
        
        // Mostrar elementos em inglês e ocultar elementos em português
        enElements.forEach(el => el.style.display = 'block');
        ptElements.forEach(el => el.style.display = 'none');
        
        // Atualizar elementos com data attributes
        elementsWithDataAttrs.forEach(el => {
            el.textContent = el.getAttribute('data-en');
        });
        
        // Atualizar o idioma do documento
        document.documentElement.lang = 'en';
    }
    
    // Adicionar event listeners aos botões
    ptBtn.addEventListener('click', switchToPT);
    enBtn.addEventListener('click', switchToEN);
    
    // Definir idioma padrão (Português)
    switchToPT();
}); 