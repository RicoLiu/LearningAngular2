
export class Init {
    load() {
        if (localStorage.getItem('operators') === null || localStorage.getItem('operators') === undefined) {
            console.log('no operators found...');
            const operators = ['operator1', 'operator2', 'operator3'];

            localStorage.setItem('operators', JSON.stringify(operators));
            return ;
        } else {
            console.log('Found operators...');

            
        }
    }
}