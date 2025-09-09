    public static boolean esPrimo(int numero) {
        if (numero <= 1) {
            return false;
        }
        return esPrimoRecursivo(numero, 2);
    }

    public static boolean esPrimoRecursivo(int n, int divisor) {
        if (n % divisor == 0) {
            if (n == divisor) {
                return true;
            } else {
                return false;
            }
        }
        return esPrimoRecursivo(n, divisor + 1);
    }
    
    public static int sumaPrimo(int numero){
        return sumaPrimoR(numero);
    }   

    public static int sumaPrimoR(int num){
        if(num < 10){
            if(esPrimo(num)){
               return num;
            }else{
                return 0;
            } 
        }else{ 
            int res = num % 10;
            num = num /10;
            int resultado = sumaPrimoR(num);
            if(esPrimo(res)){
                return resultado + res;
            }else{
                return resultado;
            }
        }   
    }
    
    public static int multiplicar(int numero){
        return multilpicarR(numero);
    }    

    public static int multilpicarR(int num){
        if(num<10){
            if(esPrimo(num)){
                return num;
            }else{
                return 0;
            }
        }else{ 
            int res = num % 10;
            num = num /10;
            int resultado = multilpicarR(num);
            if(esPrimo(res)){
               return resultado * res; 
            }else{
                return resultado;
            }
        }
    }
    
    public static int contarDigitPrimos(int numero){
        return contarDigitoPrimosR(numero);
    }

    public static int contarDigitoPrimosR(int num){
        if(num<10){
            if(esPrimo(num)){
                return 1;
            }else{
                return 0;
            }
        }else{
            int res = num %10;
            num = num /10;
            int resultado = contarDigitoPrimosR(num);
            if(esPrimo(res)){
                return resultado + 1;
            }else{
                return resultado;
            }
        }
    }

    public static int sigPrimo(int numero) {
        return siguientePrimo(numero + 1); 
    }

    public static int siguientePrimo(int n) {
        if (esPrimo(n)) {
            return n;
        }else{
            return siguientePrimo(n + 1);
        }
    }
        /*System.out.println(EXAMENN.esPrimo(3));
        System.out.println(EXAMENN.sumaPrimo(32812));
        System.out.println(EXAMENN.multiplicar(3287));
        System.out.println(EXAMENN.contarDigitPrimos(32826));*/
    public static int contarCaracteres(String s1) {
        if (s1.equals("")) return 0;
        return 1 + contarCaracteres(s1.substring(1));
    }

    public static String invertir(String s1) {
        if (s1.equals("")) return "";
        return invertir(s1.substring(1)) + s1.charAt(0);
    }

    public static int contarCaracter(String s1, char c) {
        if (s1.equals("")) return 0;
        int sum = (s1.charAt(0) == c) ? 1 : 0;
        return sum + contarCaracter(s1.substring(1), c);
    }

    public static boolean esPalindromo(String s1) {
        if (s1.length() <= 1) return true;
        if (s1.charAt(0) != s1.charAt(s1.length() - 1)) return false;
        return esPalindromo(s1.substring(1, s1.length() - 1));
    }

    public static boolean sonIguales(String s1, String s2) {
        if (s1.equals("") && s2.equals("")) return true;
        if (s1.equals("") || s2.equals("")) return false;
        if (s1.charAt(0) != s2.charAt(0)) return false;
        return sonIguales(s1.substring(1), s2.substring(1));
    }
   /* String s1 = "recursivo";
        String s2 = "recursivo";
        String s3 = "Recursivo";

        
        System.out.println(EXAMENN.contarCaracteres(s1));
        System.out.println(EXAMENN.invertir(s1));
        System.out.println(EXAMENN.contarCaracter(s1, 'r'));
        System.out.println(EXAMENN.esPalindromo(s1));
        System.out.println(EXAMENN.sonIguales(s1, s2));
        System.out.println(EXAMENN.sonIguales(s1, s3));*/
    public static void tabla(int n) {
        cicloI(n, 1);
    }

    public static void cicloI(int n, int i) {
        if (i > n) return;
        cicloJ(n, i, 1);
        System.out.println();
        cicloI(n, i + 1);
    }

    public static void cicloJ(int n, int i, int j) {
        if (j > n) return;
        System.out.println(i + " x " + j + " = " + (i * j));
        cicloJ(n, i, j + 1);
    }

    public static void tabla(int n, int k) {
        cicloK_I(n, 1, k);
    }

    public static void cicloK_I(int n, int i, int k) {
        if (i > n) return;
        cicloK_J(n, i, 1, k);
        cicloK_I(n, i + 1, k);
    }

    public static void cicloK_J(int n, int i, int j, int k) {
        if (j > n) return;
        if (i * j == k) {
            System.out.println(i + " x " + j + " = " + k);
        }
        cicloK_J(n, i, j + 1, k);
    }

    public static void tablaAscDesc(int n) {
        cicloAscDesc_I(1, n);
    }

    public static void cicloAscDesc_I(int i, int n) {
        if (i > n) return;
        cicloAscDesc_J(i, n);
        System.out.println();
        cicloAscDesc_I(i + 1, n);
    }

    public static void cicloAscDesc_J(int i, int j) {
        if (j < 1) return;
        System.out.println(i + " x " + j + " = " + (i * j));
        cicloAscDesc_J(i, j - 1);
    }

    public static void tablaPares(int n) {
        cicloPares_I(2, n);
    }

    public static void cicloPares_I(int i, int n) {
        if (i > n) return;
        cicloPares_J(i, 2, n);
        System.out.println();
        cicloPares_I(i + 2, n);
    }

    public static void cicloPares_J(int i, int j, int n) {
        if (j > n) return;
        System.out.println(i + " x " + j + " = " + (i * j));
        cicloPares_J(i, j + 2, n);
    }

    public static void tablaSinRepetición(int n) {
        cicloSinRepeticion_I(1, n);
    }

    public static void cicloSinRepeticion_I(int i, int n) {
        if (i > n) return;
        cicloSinRepeticion_J(i, i, n);
        System.out.println();
        cicloSinRepeticion_I(i + 1, n);
    }

    public static void cicloSinRepeticion_J(int i, int j, int n) {
        if (j > n) return;
        System.out.println(i + " x " + j + " = " + (i * j));
        cicloSinRepeticion_J(i, j + 1, n);
    }
   /* int n = 5;
        int k = 6;
        System.out.println("primero");
        EXAMENN.tabla(n);
        System.out.println("segundo");
        EXAMENN.tabla(n, k);       
        System.out.println("tercero0");
        EXAMENN.tablaAscDesc(n);
        System.out.println("cuarto");
        EXAMENN.tablaPares(n);      
        System.out.println("quinto");
        EXAMENN.tablaSinRepetición(n);*/
