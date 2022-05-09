/* eslint-disable no-cond-assign */
/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
let Fcapslock = '0';
let Fshift = '0';

// function checkKey(key) {
//   return `${e.type} key=${e.key} code=${e.code}${e.shiftKey ? ' shiftKey' : ''
//   }${e.ctrlKey ? ' ctrlKey' : ''
//   }${e.altKey ? ' altKey' : ''
//   }${e.metaKey ? ' metaKey' : ''
//   }${e.repeat ? ' (repeat)' : ''
//   }\n`;
// }

function funcBack() {
  const data = document.getElementById('display').innerHTML;
  const x = document.getElementById('display').innerHTML.length;
  const y = 1;
  const z = x - y;
  document.getElementById('display').innerHTML = data.slice(0, z);
}

function funcDel() {
  const data = document.getElementById('display').innerHTML;
  const x = document.getElementById('display').innerHTML.length;
  const y = 1;
  const z = x - y;
  document.getElementById('display').innerHTML = data.slice(0, z);
}
function funcCL() {
  if (Fcapslock === '0') {
    Fcapslock = '1';
  } else if (Fcapslock === '1') {
    Fcapslock = '0';
  }
}
function funcShift() {
  if (Fshift === '0') {
    Fshift = '1';
  } else if (Fshift === '1') {
    Fshift = '0';
  }
}

function funcEnter() {
  const data = document.getElementById('display').innerHTML;
  document.getElementById('display').innerHTML = `${data}<br>`;
}

function funcSpace() {
  const data = document.getElementById('display').innerHTML;
  document.getElementById('display').innerHTML = `${data} `;
}

function funcTab() {
  const data = document.getElementById('display').innerHTML;
  document.getElementById('display').innerHTML = `${data}  `;
}

function funcq() {
  const data = document.getElementById('display').innerHTML;
  if (Fcapslock === '0') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}q`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}Q`;
    }
  } else if (Fcapslock === '1') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}Q`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}q`;
    }
  }
}
function funcw() {
  const data = document.getElementById('display').innerHTML;
  if (Fcapslock === '0') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}w`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}W`;
    }
  } else if (Fcapslock === '1') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}W`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}w`;
    }
  }
}
function funce() {
  const data = document.getElementById('display').innerHTML;
  if (Fcapslock === '0') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}e`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}E`;
    }
  } else if (Fcapslock === '1') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}E`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}e`;
    }
  }
}
function funcr() {
  const data = document.getElementById('display').innerHTML;
  if (Fcapslock === '0') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}r`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}R`;
    }
  } else if (Fcapslock === '1') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}R`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}r`;
    }
  }
}

function funct() {
  const data = document.getElementById('display').innerHTML;
  if (Fcapslock === '0') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}t`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}T`;
    }
  } else if (Fcapslock === '1') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}T`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}t`;
    }
  }
}

function funcy() {
  const data = document.getElementById('display').innerHTML;
  if (Fcapslock === '0') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}y`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}Y`;
    }
  } else if (Fcapslock === '1') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}Y`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}y`;
    }
  }
}

function funcu() {
  const data = document.getElementById('display').innerHTML;
  if (Fcapslock === '0') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}u`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}U`;
    }
  } else if (Fcapslock === '1') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}U`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}u`;
    }
  }
}

function funci() {
  const data = document.getElementById('display').innerHTML;
  if (Fcapslock === '0') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}i`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}I`;
    }
  } else if (Fcapslock === '1') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}I`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}i`;
    }
  }
}

function funco() {
  const data = document.getElementById('display').innerHTML;
  if (Fcapslock === '0') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}o`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}O`;
    }
  } else if (Fcapslock === '1') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}O`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}o`;
    }
  }
}

function funcp() {
  const data = document.getElementById('display').innerHTML;
  if (Fcapslock === '0') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}p`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}P`;
    }
  } else if (Fcapslock === '1') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}P`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}p`;
    }
  }
}

function funca() {
  const data = document.getElementById('display').innerHTML;
  if (Fcapslock === '0') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}a`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}A`;
    }
  } else if (Fcapslock === '1') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}A`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}a`;
    }
  }
}

function funcs() {
  const data = document.getElementById('display').innerHTML;
  if (Fcapslock === '0') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}s`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}S`;
    }
  } else if (Fcapslock === '1') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}S`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}s`;
    }
  }
}

function funcd() {
  const data = document.getElementById('display').innerHTML;
  if (Fcapslock === '0') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}d`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}D`;
    }
  } else if (Fcapslock === '1') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}D`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}d`;
    }
  }
}

function funcf() {
  const data = document.getElementById('display').innerHTML;
  if (Fcapslock === '0') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}f`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}F`;
    }
  } else if (Fcapslock === '1') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}F`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}f`;
    }
  }
}

function funcg() {
  const data = document.getElementById('display').innerHTML;
  if (Fcapslock === '0') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}g`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}G`;
    }
  } else if (Fcapslock === '1') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}G`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}g`;
    }
  }
}

function funch() {
  const data = document.getElementById('display').innerHTML;
  if (Fcapslock === '0') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}h`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}H`;
    }
  } else if (Fcapslock === '1') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}H`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}h`;
    }
  }
}

function funcj() {
  const data = document.getElementById('display').innerHTML;
  if (Fcapslock === '0') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}j`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}J`;
    }
  } else if (Fcapslock === '1') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}J`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}j`;
    }
  }
}

function funck() {
  const data = document.getElementById('display').innerHTML;
  if (Fcapslock === '0') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}k`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}K`;
    }
  } else if (Fcapslock === '1') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}K`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}k`;
    }
  }
}

function funcl() {
  const data = document.getElementById('display').innerHTML;
  if (Fcapslock === '0') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}l`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}L`;
    }
  } else if (Fcapslock === '1') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}L`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}l`;
    }
  }
}

function funcz() {
  const data = document.getElementById('display').innerHTML;
  if (Fcapslock === '0') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}z`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}Z`;
    }
  } else if (Fcapslock === '1') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}Z`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}z`;
    }
  }
}

function funcx() {
  const data = document.getElementById('display').innerHTML;
  if (Fcapslock === '0') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}x`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}X`;
    }
  } else if (Fcapslock === '1') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}X`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}x`;
    }
  }
}

function funcc() {
  const data = document.getElementById('display').innerHTML;
  if (Fcapslock === '0') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}c`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}C`;
    }
  } else if (Fcapslock === '1') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}C`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}c`;
    }
  }
}

function funcv() {
  const data = document.getElementById('display').innerHTML;
  if (Fcapslock === '0') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}v`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}V`;
    }
  } else if (Fcapslock === '1') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}V`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}v`;
    }
  }
}

function funcb() {
  const data = document.getElementById('display').innerHTML;
  if (Fcapslock === '0') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}b`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}B`;
    }
  } else if (Fcapslock === '1') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}B`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}b`;
    }
  }
}

function funcn() {
  const data = document.getElementById('display').innerHTML;
  if (Fcapslock === '0') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}n`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}N`;
    }
  } else if (Fcapslock === '1') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}N`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}n`;
    }
  }
}

function funcm() {
  const data = document.getElementById('display').innerHTML;
  if (Fcapslock === '0') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}m`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}M`;
    }
  } else if (Fcapslock === '1') {
    if (Fshift === '0') {
      document.getElementById('display').innerHTML = `${data}M`;
    } else if (Fshift === '1') {
      Fshift = '0';
      document.getElementById('display').innerHTML = `${data}m`;
    }
  }
}

function func1() {
  const data = document.getElementById('display').innerHTML;
  if (Fshift === '0') {
    document.getElementById('display').innerHTML = `${data}1`;
  } else if (Fshift = '1') {
    Fshift = '0';
    document.getElementById('display').innerHTML = `${data}!`;
  }
}

function func2() {
  const data = document.getElementById('display').innerHTML;
  if (Fshift === '0') {
    document.getElementById('display').innerHTML = `${data}2`;
  } else if (Fshift = '1') {
    Fshift = '0';
    document.getElementById('display').innerHTML = `${data}@`;
  }
}

function func3() {
  const data = document.getElementById('display').innerHTML;
  if (Fshift === '0') {
    document.getElementById('display').innerHTML = `${data}3`;
  } else if (Fshift = '1') {
    Fshift = '0';
    document.getElementById('display').innerHTML = `${data}#`;
  }
}

function func4() {
  const data = document.getElementById('display').innerHTML;
  if (Fshift === '0') {
    document.getElementById('display').innerHTML = `${data}4`;
  } else if (Fshift = '1') {
    Fshift = '0';
    document.getElementById('display').innerHTML = `${data}$`;
  }
}

function func5() {
  const data = document.getElementById('display').innerHTML;
  if (Fshift === '0') {
    document.getElementById('display').innerHTML = `${data}5`;
  } else if (Fshift = '1') {
    Fshift = '0';
    document.getElementById('display').innerHTML = `${data}%`;
  }
}

function func6() {
  const data = document.getElementById('display').innerHTML;
  if (Fshift === '0') {
    document.getElementById('display').innerHTML = `${data}6`;
  } else if (Fshift = '1') {
    Fshift = '0';
    document.getElementById('display').innerHTML = `${data}^`;
  }
}

function func7() {
  const data = document.getElementById('display').innerHTML;
  if (Fshift === '0') {
    document.getElementById('display').innerHTML = `${data}7`;
  } else if (Fshift = '1') {
    Fshift = '0';
    document.getElementById('display').innerHTML = `${data}&`;
  }
}

function func8() {
  const data = document.getElementById('display').innerHTML;
  if (Fshift === '0') {
    document.getElementById('display').innerHTML = `${data}8`;
  } else if (Fshift = '1') {
    Fshift = '0';
    document.getElementById('display').innerHTML = `${data}*`;
  }
}

function func9() {
  const data = document.getElementById('display').innerHTML;
  if (Fshift === '0') {
    document.getElementById('display').innerHTML = `${data}9`;
  } else if (Fshift = '1') {
    Fshift = '0';
    document.getElementById('display').innerHTML = `${data}(`;
  }
}

function func0() {
  const data = document.getElementById('display').innerHTML;
  if (Fshift === '0') {
    document.getElementById('display').innerHTML = `${data}0`;
  } else if (Fshift = '1') {
    Fshift = '0';
    document.getElementById('display').innerHTML = `${data})`;
  }
}

function funcAdd1() {
  const data = document.getElementById('display').innerHTML;
  if (Fshift === '0') {
    document.getElementById('display').innerHTML = `${data}\``;
  } else if (Fshift = '1') {
    Fshift = '0';
    document.getElementById('display').innerHTML = `${data}~`;
  }
}

function funcAdd2() {
  const data = document.getElementById('display').innerHTML;
  if (Fshift === '0') {
    document.getElementById('display').innerHTML = `${data}_`;
  } else if (Fshift = '1') {
    Fshift = '0';
    document.getElementById('display').innerHTML = `${data}-`;
  }
}

function funcAdd3() {
  const data = document.getElementById('display').innerHTML;
  if (Fshift === '0') {
    document.getElementById('display').innerHTML = `${data}=`;
  } else if (Fshift = '1') {
    Fshift = '0';
    document.getElementById('display').innerHTML = `${data}+`;
  }
}

function funcAdd4() {
  const data = document.getElementById('display').innerHTML;
  if (Fshift === '0') {
    document.getElementById('display').innerHTML = `${data}[`;
  } else if (Fshift = '1') {
    Fshift = '0';
    document.getElementById('display').innerHTML = `${data}{`;
  }
}

function funcAdd5() {
  const data = document.getElementById('display').innerHTML;
  if (Fshift === '0') {
    document.getElementById('display').innerHTML = `${data}]`;
  } else if (Fshift = '1') {
    Fshift = '0';
    document.getElementById('display').innerHTML = `${data}}`;
  }
}

function funcAdd6() {
  const data = document.getElementById('display').innerHTML;
  if (Fshift === '0') {
    document.getElementById('display').innerHTML = `${data}\\`;
  } else if (Fshift = '1') {
    Fshift = '0';
    document.getElementById('display').innerHTML = `${data}/`;
  }
}

function funcAdd7() {
  const data = document.getElementById('display').innerHTML;
  if (Fshift === '0') {
    document.getElementById('display').innerHTML = `${data};`;
  } else if (Fshift = '1') {
    Fshift = '0';
    document.getElementById('display').innerHTML = `${data}:`;
  }
}

function funcAdd8() {
  const data = document.getElementById('display').innerHTML;
  if (Fshift === '0') {
    document.getElementById('display').innerHTML = `${data}'`;
  } else if (Fshift = '1') {
    Fshift = '0';
    document.getElementById('display').innerHTML = `${data}"`;
  }
}

function funcAdd9() {
  const data = document.getElementById('display').innerHTML;
  document.getElementById('display').innerHTML = `${data}\\`;
}

function funcAdd10() {
  const data = document.getElementById('display').innerHTML;
  if (Fshift === '0') {
    document.getElementById('display').innerHTML = `${data}.`;
  } else if (Fshift = '1') {
    Fshift = '0';
    document.getElementById('display').innerHTML = `${data}<`;
  }
}

function funcAdd11() {
  const data = document.getElementById('display').innerHTML;
  if (Fshift === '0') {
    document.getElementById('display').innerHTML = `${data},`;
  } else if (Fshift = '1') {
    Fshift = '0';
    document.getElementById('display').innerHTML = `${data}>`;
  }
}
