const exercises = [
    {
        category: 'Systemy pozycyjne i uzupełnieniowe. Dodawanie, odejmowanie.',
        tasks: [
            {
                content: "Wykaż, że w dodawaniu lub odejmowaniu dwóch liczb w standardowym systemie naturalnym lub\n" +
                "uzupełnieniowym przeniesienie lub pożyczka z każdej pozycji mogą być równe tylko 0 albo 1."

            },
            {
                content: 'Oblicz i oceń poprawność 8-bitowej sumy i różnicy liczb w dwójkowym systemie uzupełnieniowym\n' +
                'a) 1001110101111001 b) 1111111101111111 c) 1000000111111001 d) 0101110110000001.'
            },
            {
                content: 'W systemie naturalnym o podstawie β oblicz wartość ułamka 0,(d), d<β. Wykaż, że 0,(β)=1.\n'
            }]
    },
    {
        category: 'Mnożenie i dzielenie. Obliczanie pierwiastka kwadratowego.',
        tasks: [{
            content: ' Weź PESEL: a b c d e f # # # # # #, nr indeksu: 0 1 # p q r s t v. A = ab,cdef β Y = pqrstv β\n' +
            ' a wartość każdej\n' +
            'cyfry jest obliczona modulo β. W podstawie β=2,8,10,16 oblicz: A*Y, A*Y, A*Y, A*Y, A2\n'
        }, {
            content: 'Utwórz tabliczki mnożenia i oblicz w ósemkowym systemie uzupełnieniowym (U8) iloczyny:\n' +
            'a) (7)1 (7)23 b) (7)5 (7)756'
        }, {
            content: 'Oblicz z dokładnością do 4 cyfr znaczących używając tabeli wielokrotności dzielnika oraz metodą\n' +
            'odtwarzającą ilorazy liczb reprezentowanych w dziesiętnym systemie uzupełnieniowym:\n' +
            'a) (9)576: (9)787'
        }]
    },
];

export default exercises;