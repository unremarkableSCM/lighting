declare const THREE: any;

export class Standee {

    readonly sprite: any;
    readonly npcId: number;

    private walkOrigin: any;    // Where the walk started.
    private walkVector: any;    // Where the walk ends, relative to where it started.
    private walkTtl: number;    // How many ms it should take to get from start to end.
    private walkTime: number;   // How many ms has passed since it started moving.

    constructor(npcId: number) {
        this.npcId = npcId;
        
        // TODO: Delete this temporary code
        let textureLoader = new THREE.TextureLoader();
        let texture = textureLoader.load('crono.png');
        let material = new THREE.SpriteMaterial({map: texture}); // FIXME: Why isn't this needed - depthWrite: true
        this.sprite = new THREE.Sprite(material);

        this.walkOrigin = new THREE.Vector3();
        this.walkVector = new THREE.Vector3();
        this.stopWalk(); // Rest of walk-related initialization is in its own method.
    }

    start() {
        this.sprite.position.set(-200, -1.5, -200);
    }

    step(elapsed: number) {
        this.stepWalk(elapsed);
    }

    /**
     * Immediately set standee on given position.
     */
    moveTo(x: number, y: number, z: number) {
        this.sprite.position.set(x, y, z);
    }

    /**
     * Set standee in motion towards given position.
     */
    walkTo(x: number, y: number, z: number, ttl: number) {
        this.walkOrigin = this.sprite.position.clone();
        this.walkVector = new THREE.Vector3(x, y, z).sub(this.walkOrigin);
        this.walkTtl = ttl;
        this.walkTime = 0;
    }

    private stepWalk(elapsed: number) {
        if (this.walkTtl > 0) {
            this.walkTime += elapsed;

            let walkFinished = false;
            if (this.walkTime >= this.walkTtl) {
                this.walkTime = this.walkTtl;
                walkFinished = true;
            }

            let pctDone = this.walkTime / this.walkTtl;
            let delta = this.walkVector.clone().multiplyScalar(pctDone);
            let newPosition = this.walkOrigin.clone().add(delta);
            this.sprite.position.copy(newPosition);

            if (walkFinished) {
                this.stopWalk();
            }
        }
    }

    private stopWalk() {
        this.walkOrigin.set(0, 0, 0);
        this.walkVector.set(0, 0, 0);
        this.walkTtl = 0;
        this.walkTime = 0;
    }
}