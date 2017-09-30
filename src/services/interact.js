export default function interact(me, partner) {
    const meCollaborates = collaborate(me, partner);
    const partnerCollaborates = collaborate(partner, me);

    if (meCollaborates && partnerCollaborates) {
        me.lifePoints = Math.min(500, me.lifePoints + 3);
        partner.lifePoints = Math.min(500, partner.lifePoints + 3);

        me.trustedBy = me.trustedBy.add(partner.id);
        partner.trustedBy = partner.trustedBy.add(me.id);
    }
    else if (meCollaborates && !partnerCollaborates) {
        me.lifePoints = me.lifePoints - 6;
        partner.lifePoints = Math.min(500, partner.lifePoints + 5);

        me.betrayedBy = me.betrayedBy.add(partner.id);
        partner.trustedBy = partner.trustedBy.add(me.id);
    }
    else if (!meCollaborates && partnerCollaborates) {
        me.lifePoints = Math.min(500, me.lifePoints + 5);
        partner.lifePoints = partner.lifePoints - 6;

        me.trustedBy = me.trustedBy.add(partner.id);
        partner.betrayedBy = partner.betrayedBy.add(me.id);
    }
    else if (!meCollaborates && !partnerCollaborates) {
        me.lifePoints = me.lifePoints - 2;
        partner.lifePoints = partner.lifePoints - 2;

        me.betrayedBy = me.betrayedBy.add(partner.id);
        partner.betrayedBy = partner.betrayedBy.add(me.id);
    }
}

function collaborate(me, you) {
    switch (me.strategy) {
        case 'chill':
            return chill(me, you);
        case 'evil':
            return evil(me, you);
        case 'grudge':
            return grudge(me, you);
    }
}

function chill() {
    return true;
}

function evil() {
    return false;
}

function grudge(me, you) {
    if (me.betrayedBy.has(you.id)) {
        return false;
    }
    return true;
}
