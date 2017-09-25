export default function interact(cell, partner) {
    const cellCollaborates = collaborate(cell.strategy);
    const partnerCollaborates = collaborate(partner.strategy);

    if (cellCollaborates && partnerCollaborates) {
        cell.lifePoints = cell.lifePoints + 3;
        partner.lifePoints = partner.lifePoints + 3;
    }
    else if (cellCollaborates && !partnerCollaborates) {
        cell.lifePoints = cell.lifePoints - 4;
        partner.lifePoints = partner.lifePoints + 5;
    }
    else if (!cellCollaborates && partnerCollaborates) {
        cell.lifePoints = cell.lifePoints + 5;
        partner.lifePoints = partner.lifePoints - 4;
    }
    else if (!cellCollaborates && !partnerCollaborates) {
        cell.lifePoints = cell.lifePoints - 2;
        partner.lifePoints = partner.lifePoints - 2;
    }
}

function collaborate(strategy) {
    switch (strategy) {
        case 'chill':
            return true;
        case 'evil':
            return false;
    }
}