import {Font} from '@react-pdf/renderer';

export function Roboto() {

    Font.register({ 
        family: 'Roboto', 
        fonts: [
            {
            src: 'https://fonts.gstatic.com/s/roboto/v15/7MygqTe2zs9YkP0adA9QQQ.ttf',
            fontWeight: 100,
            },
            {
            src: 'https://fonts.gstatic.com/s/roboto/v15/dtpHsbgPEm2lVWciJZ0P-A.ttf',
            fontWeight: 300,
            },
            {
            src: 'https://fonts.gstatic.com/s/roboto/v15/W5F8_SL0XFawnjxHGsZjJA.ttf',
            fontWeight: 400,
            },
            {
            src: 'https://fonts.gstatic.com/s/roboto/v15/Uxzkqj-MIMWle-XP2pDNAA.ttf',
            fontWeight: 500,
            },
            {
            src: 'https://fonts.gstatic.com/s/roboto/v15/W5F8_SL0XFawnjxHGsZjJA.ttf',
            fontWeight: 600,
            },
            {
            src: 'https://fonts.gstatic.com/s/roboto/v15/bdHGHleUa-ndQCOrdpfxfw.ttf',
            fontWeight: 700,
            },
            {
            src: 'https://fonts.gstatic.com/s/roboto/v15/H1vB34nOKWXqzKotq25pcg.ttf',
            fontWeight: 900,
            },
        ],
    });
    Font.registerHyphenationCallback(word => {
        // Return entire word as unique part
        return [word];
    });
}