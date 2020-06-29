var naruto = {};

Object.defineProperty(naruto, 'primarySkill', {
  value: 'Shadow Clones',
  writable: false,
  enumerable: true
});

console.log('Primary Skill', naruto.primarySkill) // 'Shadow Clones'

Object.defineProperty(naruto, 'secondarySkill', {
  value: 'Rasengan',
  writable: false,
  enumerable: true
});

console.log('Secondary Skill', naruto.secondarySkill) // 'Rasengan'
naruto.secondarySkill = 'Multi Shadow Clones'
console.log('Secondary Skill', naruto.secondarySkill) // 'Rasengan' since writable is false implying readonly

Object.defineProperty(naruto, 'advancedSkill', {
  value: 'Rasen Shuriken',
  writable: false,
  enumerable: false
});

console.log('Advanced Skill', naruto.advancedSkill) // 'Rasen Shuriken', not displayed in dict, still accessible

Object.defineProperty(naruto, 'otherSkill', {
  value: 'Talking',
  writable: true,
  configurable: true,
  enumerable: true
});

console.log('Other Skill', naruto.otherSkill) // Talking
naruto.otherSkill = 'Sage Mode'
console.log('Other Skill', naruto.otherSkill) // Sage Mode, value can be overwriiten since writable is true
console.table(naruto)

delete naruto.primarySkill // Won't get deleted as configurable is false
delete naruto.otherSkill // Gets deleted as configurable is true
console.table(naruto)