export function shuffle ( a ) {
    let j, x, i;
    for ( i = a.length - 1; i > 0; i-- ) {
        j      = Math.floor( Math.random() * ( i + 1 ) );
        x      = a[ i ];
        a[ i ] = a[ j ];
        a[ j ] = x;
    }
    return a;
}

export function romanize ( num ) {
    if ( isNaN( num ) )
        return NaN;
    if ( String( +num ) === '0' ) {
        return '0';
    }
    let digits = String( +num ).split( '' ),
        key    = [ '', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM',
            '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC',
            '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX' ],
        roman  = '',
        i      = 3;
    while ( i-- )
        roman = ( key[ +digits.pop() + ( i * 10 ) ] || '' ) + roman;
    return Array( +digits.join( '' ) + 1 ).join( 'M' ) + roman;
}
