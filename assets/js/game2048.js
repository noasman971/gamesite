document.addEventListener("DOMContentLoaded", function () {


    let case1 = document.getElementById("case1");
    let case2 = document.getElementById("case2");
    let case3 = document.getElementById("case3");
    let case4 = document.getElementById("case4");
    let case5 = document.getElementById("case5");
    let case6 = document.getElementById("case6");
    let case7 = document.getElementById("case7");
    let case8 = document.getElementById("case8");
    let case9 = document.getElementById("case9");
    let score = document.getElementById("score");


    let ligne1 = [case1, case2, case3];
    let ligne2 = [case4, case5, case6];
    let ligne3 = [case7, case8, case9];

    let colonne1 = [case1, case4, case7];
    let colonne2 = [case2, case5, case8];
    let colonne3 = [case3, case6, case9];



    //let trouexistence = []

    let casesvides = []
    let casenonvides = []


    function ViderListe() {
        casesvides.length = 0;
        casenonvides.length = 0;
    }

    function CaseEmptyOrNot(ligne) {
        ViderListe();
        for (let i = 0; i < ligne.length; i++) {
            if (ligne[i].textContent != "") {
                casenonvides.push(i);
            } else {
                casesvides.push(i);
            }
        }

    }


    function Right(ligne){
        if (casesvides.length === 0 || casenonvides.length === 0) {
            return;
        }


        if (casesvides[0] == 0 && casenonvides[casenonvides.length-1] ==ligne.length-1 ){
            return;
        }

        if(casenonvides[casenonvides.length-1] == ligne.length-1 && casenonvides.length == 2) {

            ligne[casesvides[casesvides.length-1]].textContent = ligne[casenonvides[casenonvides.length-2]].textContent;
            ligne[casenonvides[casenonvides.length-2]].textContent = ""
            CaseEmptyOrNot(ligne);


        } else if(casenonvides.length == ligne.length) {
            return;

        }
        //SINON ON DEPLACE DABORD LA DEUXIEME PUIS LA PREMIERE
        else{
            ligne[casesvides[casesvides.length-1]].textContent = ligne[casenonvides[casenonvides.length-1]].textContent;
            ligne[casenonvides[casenonvides.length-1]].textContent = ""

        }



    }

    function Left(ligne) {

        ligne.reverse();



        CaseEmptyOrNot(ligne);
        Right(ligne);

        ligne.reverse();
    }








    let compteur = 0
    function Fusion(ligne) {
        CaseEmptyOrNot(ligne);

        if(ligne[casenonvides[casenonvides.length-1]].textContent == ligne[casenonvides[casenonvides.length-2]].textContent) {
            ligne[casenonvides[casenonvides.length-1]].textContent = ligne[casenonvides[casenonvides.length-1]].textContent*2
            ligne[casenonvides[casenonvides.length-2]].textContent = ""
            compteur+= Number(ligne[casenonvides[casenonvides.length-1]].textContent) ;
            score.textContent= "Score : " + compteur;

        }
        if(casenonvides.length == 3 && ligne[casenonvides[casenonvides.length-2]].textContent == ligne[casenonvides[casenonvides.length-3]].textContent) {
            ligne[casenonvides[casenonvides.length-2]].textContent = ligne[casenonvides[casenonvides.length-2]].textContent*2
            ligne[casenonvides[casenonvides.length-3]].textContent = ""
            compteur+= Number(ligne[casenonvides[casenonvides.length-2]].textContent) ;
            score.textContent= "Score : " + compteur;


        }


    }


    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let randomNumber = Math.random() < 0.5 ? 2 : 4;  // Random entre 2 et 4


    function CaseRandom(){
        let a = getRandomInt(3);
        CaseEmptyOrNot(ligne1 || colonne1)

        if (casesvides.length != 0 && a == 0){
            ligne1[casesvides[0]].textContent = randomNumber;
            return;
        }
        CaseEmptyOrNot(ligne2 || colonne2)
        if (casesvides.length != 0 && a == 1){
            ligne2[casesvides[0]].textContent = randomNumber;
            return;
        }
        CaseEmptyOrNot(ligne3 || colonne3)
        if (casesvides.length != 0 && a == 2){
            ligne3[casesvides[0]].textContent = randomNumber;
            return;
        }

    }


    function EndParty(){
        

    }




    window.addEventListener("keydown", (event) => {
        let keypress = event.key;

        if (keypress == "ArrowDown") {
            event.preventDefault();
            CaseEmptyOrNot(colonne1);
            if (casenonvides.length >=2){
                Fusion(colonne1);
            }
            Right(colonne1);
            CaseEmptyOrNot(colonne1);
            Right(colonne1);
            CaseEmptyOrNot(colonne1);

            CaseEmptyOrNot(colonne2);
            if (casenonvides.length >=2){
                Fusion(colonne2);
            }
            Right(colonne2);
            CaseEmptyOrNot(colonne2);
            Right(colonne2);


            CaseEmptyOrNot(colonne3);
            if (casenonvides.length >=2){
                Fusion(colonne3);
            }
            Right(colonne3);
            CaseEmptyOrNot(colonne3);
            Right(colonne3);
            CaseRandom()


        }



        if (keypress == "ArrowUp") {
            event.preventDefault();
            CaseEmptyOrNot(colonne1);
            if (casenonvides.length ===2){
                Fusion(colonne1.reverse());
                Left(colonne1.reverse());
            } else if (casenonvides.length ===3){
                Fusion(colonne1);

            }
            Left(colonne1);
            CaseEmptyOrNot(colonne1);
            Left(colonne1);

            CaseEmptyOrNot(colonne2);
            if (casenonvides.length ===2){
                Fusion(colonne2.reverse());
                Left(colonne2.reverse());
            } else if (casenonvides.length ===3){
                Fusion(colonne2);

            }
            Left(colonne2);
            CaseEmptyOrNot(colonne2);
            Left(colonne2);



            CaseEmptyOrNot(colonne3);
            if (casenonvides.length ===2){
                Fusion(colonne3.reverse());
                Left(colonne3.reverse());
            } else if (casenonvides.length ===3){
                Fusion(colonne3);

            }
            Left(colonne3);
            CaseEmptyOrNot(colonne3);
            Left(colonne3);
            CaseRandom()

        }



        if (keypress == "ArrowRight") {
            CaseEmptyOrNot(ligne1);
            if (casenonvides.length >=2){
                Fusion(ligne1);
            }
            Right(ligne1);
            CaseEmptyOrNot(ligne1);
            Right(ligne1);


            CaseEmptyOrNot(ligne2);
            if (casenonvides.length >=2){
                Fusion(ligne2);
            }
            Right(ligne2);
            CaseEmptyOrNot(ligne2);
            Right(ligne2);


            CaseEmptyOrNot(ligne3);
            if (casenonvides.length >=2){
                Fusion(ligne3);
            }
            Right(ligne3);
            CaseEmptyOrNot(ligne3);
            Right(ligne3);
            CaseRandom()
        }




        if (keypress == "ArrowLeft") {


            CaseEmptyOrNot(ligne1);
            if (casenonvides.length ===2){
                Fusion(ligne1.reverse());
                Left(ligne1.reverse());
            } else if (casenonvides.length ===3){
                Fusion(ligne1);

            }

            Left(ligne1);
            CaseEmptyOrNot(ligne1);
            Left(ligne1);

            CaseEmptyOrNot(ligne2);
            if (casenonvides.length ===2){
                Fusion(ligne2.reverse());
                Left(ligne2.reverse());
            } else if (casenonvides.length ===3){
                Fusion(ligne2);

            }
            Left(ligne2);
            CaseEmptyOrNot(ligne2);
            Left(ligne2);



            CaseEmptyOrNot(ligne3);
            if (casenonvides.length ===2){
                Fusion(ligne3.reverse());
                Left(ligne3.reverse());
            } else if (casenonvides.length ===3){
                Fusion(ligne3);

            }
            Left(ligne3);
            CaseEmptyOrNot(ligne3);
            Left(ligne3);
            CaseRandom()

        }

        }
    );




})
