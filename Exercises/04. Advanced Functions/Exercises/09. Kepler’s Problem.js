function approximateEccentricAnomaly(M, e) {
    let f = (E) => E - e * Math.sin(E) - M;
    let fPrim = (E) => 1 - e * Math.cos(E);

    let accuracy = 1e-9;
    let E0 = M;

    function approximate  () {
        if (Math.abs(f(E0)) <= accuracy) {
            return;
        }

        E0 = E0 - f(E0) / fPrim(E0);

        approximate();
    }

    approximate();

    console.log(+E0.toFixed(9));
}