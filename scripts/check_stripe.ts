import { SKILLS } from '../lib/content/skills.js';

SKILLS.forEach(skill => {
  console.log(`${skill.slug}: ${skill.price} | ${skill.checkoutUrl}`);
});
