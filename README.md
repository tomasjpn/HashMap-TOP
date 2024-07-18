# HashMap-Klasse

Solution for TheOdinProject: HashMaps: https://www.theodinproject.com/lessons/javascript-hashmap


## class HashMap + class HashSet (erbt die selben Methoden, jedoch mit der Ausnahme, dass nur die Keys gespeichert werden)

Methoden:

---

#### **`constructor(sizeBucketsArr)`**

**constructor(sizeBucketsArr: number = 16): void**

Initialisiert eine neue Hash Map mit der angegebenen Größe für das Bucket-Array.

---

#### **`checkIndex(index)`**

**checkIndex(index: number): void**

Stellt sicher, dass der Zugriff auf den Index innerhalb der gültigen Grenze liegt.

- **Parameter:**
  - `index`: Der zu überprüfende Index.

---

#### **`hash(key)`**

**hash(key: string): number**

Nimmt einen Schlüssel und produziert daraus einen Hash-Code.

- **Parameter:**
  - `key`: Der Schlüssel, für den der Hash-Code berechnet werden soll.
  
- **Rückgabe:**
  - Der berechnete Hash-Code.

---

#### **`findEntry(bucket, key)`**

**findEntry(bucket: Array<any>, key: string): object | null**

Findet den Eintrag im Bucket mit dem angegebenen Schlüssel.

- **Parameter:**
  - `bucket`: Der Bucket, in dem gesucht wird.
  - `key`: Der Schlüssel, nach dem gesucht wird.
  
- **Rückgabe:**
  - Der gefundene Eintrag oder `null`, wenn der Eintrag nicht gefunden wird.

---

#### **`set(key, value)`**

**set(key: string, value: any): void**

Fügt einen Eintrag mit dem angegebenen Schlüssel und Wert hinzu oder aktualisiert den Wert, falls der Schlüssel bereits existiert.

- **Parameter:**
  - `key`: Der Schlüssel des einzufügenden Elements.
  - `value`: Der zugehörige Wert des einzufügenden Elements.

---

#### **`resize()`**

**resize(): void**

Vergrößert die Hash Map, um den Load-Factor zu reduzieren und Kollisionen zu minimieren.

---

#### **`get(key)`**

**get(key: string): any | null**

Gibt den Wert zurück, der mit dem angegebenen Schlüssel verknüpft ist, oder `null`, wenn der Schlüssel nicht gefunden wird.

- **Parameter:**
  - `key`: Der Schlüssel, dessen Wert abgerufen werden soll.

---

#### **`has(key)`**

**has(key: string): boolean**

Überprüft, ob ein Schlüssel in der Hash Map vorhanden ist.

- **Parameter:**
  - `key`: Der Schlüssel, der überprüft werden soll.
  
- **Rückgabe:**
  - `true`, wenn der Schlüssel vorhanden ist, andernfalls `false`.

---

#### **`remove(key)`**

**remove(key: string): boolean**

Löscht den Eintrag mit dem angegebenen Schlüssel aus der Hash Map.

- **Parameter:**
  - `key`: Der Schlüssel des zu entfernenden Elements.
  
- **Rückgabe:**
  - `true`, wenn der Eintrag erfolgreich entfernt wurde, andernfalls `false`.

---

#### **`length()`**

**length(): number**

Gibt die Anzahl der gespeicherten Schlüssel/Wert-Paare in der Hash Map zurück.

- **Rückgabe:**
  - Die Anzahl der Einträge in der Hash Map.

---

#### **`clear()`**

**clear(): void**

Entfernt alle Einträge aus der Hash Map und setzt sie auf ihren ursprünglichen Zustand zurück.

---

#### **`keys()`**

**keys(): Array<string>**

Gibt ein Array zurück, das alle Schlüssel in der Hash Map enthält.

- **Rückgabe:**
  - Ein Array mit allen Schlüsseln in der Hash Map.

---

#### **`values()`**

**values(): Array<any>**

Gibt ein Array zurück, das alle Werte in der Hash Map enthält.

- **Rückgabe:**
  - Ein Array mit allen Werten in der Hash Map.

---

#### **`entries()`**

**entries(): Array<Array<any>>**

Gibt ein Array zurück, das Arrays von Schlüssel/Wert-Paaren aller Elemente in der Hash Map enthält.

- **Rückgabe:**
  - Ein Array mit Arrays von Schlüssel/Wert-Paaren aller Elemente in der Hash Map.

---
