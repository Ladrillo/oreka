export default function interact(cell, partner) {
    const cellCollaborates = collaborate(cell.strategy);
    const partnerCollaborates = collaborate(partner.strategy);

    if (cellCollaborates && partnerCollaborates) {
        cell.lifePoints = cell.lifePoints + 3;
        partner.lifePoints = partner.lifePoints + 3;
    }
    else if (cellCollaborates && !partnerCollaborates) {
        cell.lifePoints = cell.lifePoints - 6;
        partner.lifePoints = partner.lifePoints + 5;
    }
    else if (!cellCollaborates && partnerCollaborates) {
        cell.lifePoints = cell.lifePoints + 5;
        partner.lifePoints = partner.lifePoints - 6;
    }
    else if (!cellCollaborates && !partnerCollaborates) {
        cell.lifePoints = cell.lifePoints - 2;
        partner.lifePoints = partner.lifePoints - 2;
    }
}

function collaborate(strategy, partner) {
    switch (strategy) {
        case 'chill':
            return chillStrategy(partner);
        case 'evil':
            return evilStrategy(partner);
        case 'titfortat':
            return titTatStrategy(partner);
    }
}

function chillStrategy(partner) {
    return true;
}

function evilStrategy(partner) {
    return false;
}

function titTatStrategy(partner) {
    
}