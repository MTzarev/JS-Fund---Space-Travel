function spaceTravel(input) {
    let route = input[0].split('||');
    let fuel = Number(input[1]);
    let ammunition = Number(input[2]);

    for (let command of route) {
        let [actions, num] = command.split(' ');

        if (actions === 'Travel') {
            value = Number(num);
            if (fuel >= num) {
                fuel -= num;
                console.log(`The spaceship travelled ${value} light-years.`);
            } else {
                console.log("Mission failed.");
                return;
            }
        } else if (actions === 'Enemy') {
            num = Number(num);
            if (ammunition >= num) {
                ammunition -= num;
                console.log(`An enemy with ${num} armour is defeated.`);
            } else {
                let neededFuel = num * 2;
                if (fuel >= neededFuel) {
                    fuel -= neededFuel;
                    console.log(`An enemy with ${num} armour is outmaneuvered.`);
                } else {
                    console.log("Mission failed.");
                    return;
                }
            }
        } else if (actions === 'Repair') {
            num = num.split('|');
            let addedAmmunitions = Number(num[0]);
            let addedFuel = Number(num[0]);

            ammunition += addedAmmunitions * 2;
            fuel += addedFuel;

            console.log(`Ammunitions added: ${addedAmmunitions * 2}.`);
            console.log(`Fuel added: ${addedFuel}.`);
        } else if (actions === 'Titan') {
            console.log("You have reached Titan, all passengers are safe.");
            return;
        }
    }
}

// Example usage
spaceTravel([ 'Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', 
'60', 
'100' ])
;