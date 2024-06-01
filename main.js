// rem - remainder = ნაშთი
// mod - modus = მოდული
// s - stroke = შტრიხი

const Main = () => {
  const system = {
    X1: { rem: 1, mod: 3 },
    X2: { rem: 2, mod: 4 },
    X3: { rem: 4, mod: 5 },
  };

  const b1 = system.X1.rem;
  const b2 = system.X2.rem;
  const b3 = system.X3.rem;

  const M = system.X1.mod * system.X2.mod * system.X3.mod;
  const M1 = system.X2.mod * system.X3.mod;
  const M2 = system.X1.mod * system.X3.mod;
  const M3 = system.X1.mod * system.X2.mod;

  const M1_s = find_stroke(M1, system.X1);
  const M2_s = find_stroke(M2, system.X2);
  const M3_s = find_stroke(M3, system.X3);

  const X0_system = {
    rem: b1 * M1 * M1_s + b2 * M2 * M2_s + b3 * M3 * M3_s,
    mod: M,
  };

  const X0 = X0_system.rem % X0_system.mod;

  console.log(`
  გვაქვს სისტემა:
  X ≡ ${system.X1.rem} (mod ${system.X1.mod})
  X ≡ ${system.X2.rem} (mod ${system.X2.mod})
  X ≡ ${system.X3.rem} (mod ${system.X3.mod})

  ვიპოვოთ M\u2081, M\u2082, M\u2083:
  M\u2081 = ${system.X2.mod}*${system.X3.mod} = ${M1}
  M\u2082 = ${system.X1.mod}*${system.X3.mod} = ${M2} 
  M\u2083 = ${system.X1.mod}*${system.X2.mod} = ${M3}

  ვიპოვოთ M'\u2081, M'\u2082, M'\u2083:
  ანუ : M\u2081*M'\u2081 ≡ 1 (mod ${system.X1.mod})

  უნდა ვიპოვოთ ისეთი რიცხვი რომელზედაც გავამრავლებთ მიმდინარე M_ს და ნამრავლის mod_ზე გაყოფისას,
  ნაშთს დაგვიბრუნებს 1_ს.

  ${M1}*M'\u2081 ≡ 1 (mod ${system.X1.mod}) - M'\u2081=${M1_s}
  ${M2}*M'\u2082 ≡ 1 (mod ${system.X2.mod}) - M'\u2082=${M2_s}
  ${M3}*M'\u2083 ≡ 1 (mod ${system.X3.mod}) - M'\u2083=${M3_s}

  ვიპოცოთ X\u2080:
  ფორმულა - X\u2080 ≡ (b\u2081M\u2081*M'\u2081 + b\u2082M\u2082*M'\u2082 + b\u2083M\u2083*M'\u2083) (mod M)

  ანუ: X\u2080 ≡ (${b1}*${M1}*${M1_s} + ${b2}*${M2}*${M2_s} + ${b3}*${M2}*${M2_s}) (mod ${M})
  X\u2080 ≡ ${X0_system.rem} (mod ${M})
  X\u2080=${X0}

  საბოლოოდ ვიპოვოთ X ფორმულით: X = X\u2080+Mt
  X=${X0}+${M}t
`);
};

const find_stroke = (M, X) => {
  let M_s = 1;
  while ((M * M_s) % X.mod != 1) {
    M_s += 1;
  }
  return M_s;
};

Main();
