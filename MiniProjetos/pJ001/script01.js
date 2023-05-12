let log = new Log(document.querySelector('.log'));

let char = new witch("Meduza");
let monster = new LittleMonter();

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

stage.start();