export default class GameReset {
    restart() {
        localStorage.setItem('playSoundAfterReload', 'true');
        location.reload();
    }
}