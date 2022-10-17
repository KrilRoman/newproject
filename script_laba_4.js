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

    console.log('E9')

    console.log('test is TRUE:')
    let test=true
    console.log(test)
    console.log(!test)

    if (test){
        console.log(test,'1 way')
    }

    console.log('test is FALSE:')
    test=false
    console.log(test)
    console.log(!test)

    if (!test){
        console.log(test,'2 way')
    }
    

}

function func10(){

    console.log('E10')

    test=false
    console.log('test is FALSE')
    console.log(!test)
    console.log(test)
    if (!test){
        console.log(test,'1 way')
    }

    test=true
    console.log('test is TRUE')
    console.log(!test)
    console.log(test)
    if (test){
        console.log(test,'2 way')
    }
}

function func11(){
    console.log('E11')
    let a = [5,0,-3,2]

    for( i in a){
        if(5>a[i]>0){
            console.log(true)
        }
        else{
            console.log(false)
        }
    }
}

function func12(){
    console.log('E12')
    let a = [5,0,-3,2]

    for( i in a){
        if(a[i]==0||a[i]==2){
            console.log(a[i]+7,'TRUE')
        }
        else{
            console.log(a[i]/10,'FALSE')
        }
    }

}

function func13(){
    console.log('E13')
    let a=[1,0,3]
    let b=[3,6,5]
    for(i in a){
        if(a[i]<=1&&b[i]>=3){
            console.log(a[i]+b[i],'TRUE')
        }
        else{
            console.log(a[i]-b[i],'FALSE')
        }
    }
}

function func14(){
    console.log('E14')
    let a=[1,4,9,13]
    let b=[3,6,13,16]
    
    for(i in a){
        if(11>a[i]&&a[i]>2){
            console.log(a[i],"TRUE")
        }

        else{if(14>b[i]&&b[i]>=6){
            console.log(b[i],"TRUE")
        }
        else{
            console.log('FALSE')
        }
        }
    }
}

function func15(){
    console.log('E15')

    let result=''

    let num=[1,2,3,4]
    
    
    for (j in num){
        switch(num[j]){
            case 1:
                result+='Зима '

                break
            case 2:
                result+='Весна '

                break
            case 3:
                result+="Літо "

                break
            case 4:
                result+="Осінь "

                break
        }
    }

console.log(result)
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

func10()

func11()

func12()

func13()

func14()

func15()