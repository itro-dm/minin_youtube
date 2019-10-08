enum Membership {
 Simple,
 Standart,
 Premium
}

const membership = Membership.Standart;
console.log(membership); // 1

const membershipReverse = Membership[2];
console.log(membershipReverse); // Premium

enum SocialMedia {
 VK= 'VK',
 FB = 'FB',
 INSTA = 'INSTA'
}

const social = SocialMedia.INSTA;
console.log(social); // INSTA
