export default class HashMap {
    constructor (sizeBucketsArr = 16){
        this.bucketsArr = new Array (sizeBucketsArr); // Arrays, in denen die Schlüssel/Wert-Paare basierend auf ihren Hash-Code gespeichert werden
        this.size = 0; // Anzahl der gespeicherten Schlüssel/Wert-Paare
    }

    // Stellt sicher, dass der Zugriff auf den Index innerhalb der gültigen Grenze liegt
    checkIndex(index) {
        if (index < 0 || index >= this.bucketsArr.length){
            throw new Error ("Trying to access index out of bound");
        }
    }

    // Nimmt einen Key und produziert daraus einen Hash Code
    hash(key){
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++){ 
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.bucketsArr.length;
        }

        return hashCode;
    }

    // Eintrag in die HashMap hinzuzufügen
    set(key, value){
        const index = this.hash(key); // Hash Code von den übergebenen Key wird produziert -> gleichzeitig wird dadruch der Index für die Bucketposition im Array bestimmt
        this.checkIndex(index); // Index muss auf Gültigkeit überprüft werden

        // Bucket wird erstellt, falls er an dem Index nicht existiert
        if (!this.bucketsArr[index]){
            this.bucketsArr[index] = [];
        }

        // Iterriert durch die bucketsArr
        for (let i = 0; i < this.bucketsArr[index].length; i++){
            if (this.bucketsArr[index][i].key === key){ // wenn der übergebene Key an dem Bucket vorhanden ist, wird der alte Inhalt mit dem neuen Inhalt des selben Keys überschrieben
                this.bucketsArr[index][i].value = value;
                return;
            }
        }

        // Ansonsten wird ein neuer Eintrag mit Key und Value an dem entsprechenden Index hinzugefügt
        this.bucketsArr[index].push({key, value});
        this.size++; // Die Anzahl der gespeicherten Elemente in der HashMap -> wichtig für Load-Factor

        // Load-Factor: Überprüfe, ob das BucketArray resized werden soll. Wenn der Load Factor zu hoch ist => Bucket zu voll => Wahrscheinlicher eine Kollision
        if (this.size / this.bucketsArr.length > 0.75){ // Verhältnis zwischen gespeicherten ELemente zur Anzahl der bucketsArr im HashMap darf überschreitet 0.75
            this.resize();
        }
    }

    // Vergrößert die HashMap um den Load-Factor zu verkleinern + Kollisionen zu minimieren
    resize(){
        const oldBucketsArr = this.bucketsArr; // Speichert das aktuelle BucketArray
        this.bucketsArr = new Array(oldBucketsArr.length * 2); // neues BucketArray mit 2x größer als vorher
        this.size = 0;

        for (const bucket of oldbucketsArr){
            if (bucket){ // Leere bucketsArr werden übersprungen
                for (const entry of bucket){ // Iterriert über jedes Element im Bucket
                    this.set(entry.key, entry.value); // Fügt jeden Eintrag in das neue BucketArray
                }
            }
        }
    }

    // Nimmt den Key und gibt den Wert des zugehörigen Keys wieder || Wenn es den Key nicht gibt -> wird null zurückgegeben
    get(key){
        const index = this.hash(key); // Index, um den entsprechenden Bucket zu finden
        this.checkIndex(index);

        if (!this.bucketsArr[index]){ // Überprüfung, ob es an der Indexposition einen Bucket gibt -> null = gesuchter Schlüssel ist nicht in der HashMap vorhanden
            return null;
        }
        for (let i = 0; i < this.bucketsArr[index].length; i++){
            if (key === this.bucketsArr[index][i].key){
                return this.bucketsArr[index][i].value;
            }
        }

        return null;
    }

    // Überprüft ob der Key in der HashMap vorhanden ist 
    has(key){
        const index = this.hash(key);
        this.checkIndex(index);

        if (!this.bucketsArr[index]){
            return false;
        }
        
        for (let i = 0; i < this.bucketsArr[index].length; i++){
            if (key === this.bucketsArr[index][i].key){
                return true;
            }
        }

        return false;
    }

    // Löscht den Eintrag mithilfe des übergebenen Key
    remove(key){
    const index = this.hash(key);
    this.checkIndex(index);

    if (!this.bucketsArr[index]){
        return false;
    }
 
    for (let i = 0; i < this.bucketsArr[index].length; i++){
        if (key === this.bucketsArr[index][i].key){
            this.bucketsArr[index].splice(i, 1); // Ab den Index i genau ein Element gelöscht
            this.size--; // Die aktuelle größ der Einträge zu aktualisiern
            return true;
        }
    }

    return false;
   }

   // Gibt die Anzahl der gespeicherten Keys in der HashMap
   length(){
    return this.size;
   }

   // Entfernt alle Einträge in der HashMap
   clear(){
    this.bucketsArr = new Array(this.bucketsArr.length); // Neues Array
    this.size = 0; // Zurücksetzen der Größe
   }

   // Gibt einen Array zurück, das alle Keys der HashMap enthält
   keys(){
    let keysArr = []; // Sammel Array 

    for (let i = 0; i < this.bucketsArr.length; i++){ // Iterriert durch das Array mit Buckets
        if (this.bucketsArr[i] && Array.isArray(this.bucketsArr[i])){ // Überprüfung, ob der Bucket existiert und ein Array ist
            for (let j = 0; j < this.bucketsArr[i].length; j++){ // Iterriert durch den Bucket
                if (this.bucketsArr[i][j] && this.bucketsArr[i][j].key){ // Überprüft, ob ein gültiges Element sowie anschlie0end gültiger Key existiert
                    keysArr.push(this.bucketsArr[i][j].key) // Der Key wird in das Sammel Array hinzugefügt
                }
            }
        }
    }

    return keysArr;
   }
}
