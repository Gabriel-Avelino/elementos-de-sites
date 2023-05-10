export default function (data) {
    //Seleciona a árvore
    const tree = document.getElementById('tree');

    //Recebe a árvore de elementos
    const menu = document.createElement('ul');


    const FirstLevel = data.filter(item => !item.parent);
    const getFirstLis = FirstLevel.map(createTree); //Retorna array com li's

    //Adicionar li's ao menu
    getFirstLis.forEach(li => menu.append(li))
    function createTree(item) {
        //Elemento
        const li = document.createElement('li');
        li.innerHTML = item.name;

        const getChildren = data.filter(child => child.parent === item.id);

        if (getChildren.length > 0) {

            //Adiciona click de expansão de lista
            li.addEventListener('click', (e)=>{
                e.stopPropagation();
                e.target.classList.toggle('open');
            })

            //Cria uma classe identificadora de filhos
            li.classList.add('has-children')

            //Constrói os filhos
            const submenu = document.createElement('ul');
            getChildren.map(createTree)
                .forEach(li => submenu.append(li))
            li.append(submenu);
        }

        return li
    }
    //Adiciona o menu no html
    tree.append(menu);
};