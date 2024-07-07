/* 

useState 

permet de stocker 1 etat local dans un composant 


::::::::::::::::::
useEffect 


c'est 1 hook permet de faire des choses au démarage du composant 

on s'utilise souvent pour faire des choses asynchrones 

il peut s'executer a la demande en fonction de l'etat d'un state grace au [] des dependances

on peut declarer plusieur UE dans un composant 

::::::::::::::::::::

::::::::::::::::::::

useRef: 

permet d'eviter le rerender du composant 
en etiquettant une reférence a un élement du dom par exemple
La valeur de la référence peut être utilisée à l'intérieur du composant ou dans ses effets secondaires sans déclencher de re-rendu du composant.



::::::::::::::::::::
useContext: 
permet de partager l'etat d'une donnée dans toute l'application pour eviter le props dreeling 

permet en react de creer un espace spéciale pour stocker des infos, en gros une boite speciale on met les info dans cette boite magique va permetre de lire et d'utiliser les données sans avoir a les passer par des props. Comme redux tookit. 

facilite la communicaion entre les composants 

exemple le thème 

::::::::::::::::::::
useMemo: 
permet d'enregistrer une valeur par exemple d'un calcul et d'eviter un rerender inutile 

exemple avec le calcul et l'input
en gros ça marche un peu comme un useEffect avec un tableau de dependance comme le Ue


::::::::::::::::::::
useCallback: 
la meme chose que UMemo mais avec des fonctions 

::::::::::::::::::::
UseReducer

gerer des states complex

ressemble un peu a redux dans la manière de fonctionner avec des state et des actions et le payload qui est la nouvelle valeur a 


*/
