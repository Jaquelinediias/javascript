const char = createKnight('Jaqueline');
const monster = createLitterMonster();


stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
)

console.log(monster.name);