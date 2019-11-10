function modify(workerObj) {
    if (workerObj.handsShaking) {
        workerObj.handsShaking = false;
        workerObj.bloodAlcoholLevel += 0.1 * workerObj.weight * workerObj.experience;
    }

    return workerObj;
}