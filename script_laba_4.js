function func1(){
    let a=-3;
    console.log('E1')
    while(a<3){
        if (a==0){
            console.log('a =',a)
            console.log('Right');
            a++;
        }
        else{
            console.log('a =',a)
            console.log('Bad')
            a++;
        }
    }
}
function func2(){
    let a=-3;
    console.log('E2')
    while(a<3){
        if (a>0){
            console.log('a =',a)
            console.log('Right');
            a++;
        }
        else{
            console.log('a =',a)
            console.log('Bad')
            a++;
        }
    }
}

function func3(){
    let a=-3;
    console.log('E3')
    while(a<3){
        if (a<0){
            console.log('a =',a)
            console.log('Right');
            a++;
        }
        else{
            console.log('a =',a)
            console.log('Bad')
            a++;
        }
    }
}

function func4(){
    let a=-3;
    console.log('E4')
    while(a<3){
        if (a>=0){
            console.log('a =',a)
            console.log('Right');
            a++;
        }
        else{
            console.log('a =',a)
            console.log('Bad')
            a++;
        }
    }
}

function func5(){
    let a=-3;
    console.log('E5')
    while(a<3){
        if (a<=0){
            console.log('a =',a)
            console.log('Right');
            a++;
        }
        else{
            console.log('a =',a)
            console.log('Bad')
            a++;
        }
    }
}

function func6(){
    let a=-3;
    console.log('E6')
    while(a<3){
        if (a!=0){
            console.log('a =',a)
            console.log('Right');
            a++;
        }
        else{
            console.log('a =',a);
            console.log('Bad');
            a++;
        }
    }
}

function func7(){
    let a="тест";
    console.log('E7')
    while(a!='test'){
        if (a="тест"){
            console.log('a =',a);
            console.log('Bad');
            a='3'
        }
        if (a=3){
            console.log('a =',a);
            console.log('Bad');
            a='test';
        }
        if(a='test'){
            console.log('a =',a);
            console.log('Right')
        }
    }
}

function func8(){
    console.log('E8');
    let a=1;
    let a_type=typeof(a);

    if (a=1){
        console.log('a =',a);
        console.log('Bad');
        a=3;
    }

    if (a=3){
        console.log('a =',a);
        console.log('Bad');
        a='1';
    }

    if (a_type='string' && a=='1'){
        console.log('a =',a,'type = string:',a_type)
        console.log('Right');
    }
}

function func9(){
    let test=true;
    console.log('E9');
    console.log('test is', true);
    if(test=true){
        console.log(test);
    }
    test = false;
    if(test!=true){
        console.log(test)
    }


}

func1()

func2()

func3()

func4()

func5()

func6()

func7()

func8()

func9()
