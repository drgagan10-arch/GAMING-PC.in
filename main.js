
(function(){
var WA='918221826243',EMAIL='drgagan.10@gmail.com',TEL='+918221826243';
var DEF="Hello GAMING PC! I am interested in your gaming PCs and computer services in Amritsar. Please share details about available gaming PCs, configurations, prices, home installation and game installation services.";

function wa(m){
  return 'https://wa.me/'+WA+'?text='+encodeURIComponent(m||DEF);
}

document.querySelectorAll('[data-wa]').forEach(function(a){
  a.href=wa(a.dataset.wa);
  a.target='_blank';
  a.rel='noopener';
});

var f=document.querySelector('.fab');
if(f){
  f.querySelector('.wa').href=wa();
  f.querySelector('.ml').href='mailto:'+EMAIL+'?subject='+encodeURIComponent('Enquiry for GAMING PC')+'&body='+encodeURIComponent("Hello GAMING PC,\n\nI am interested in your gaming PCs and services. Please share the available options, configurations and pricing.\n\nThank you.");
  f.querySelector('.ph').href='tel:'+TEL;
}

document.querySelectorAll('.mail').forEach(function(a){
  a.href='mailto:'+EMAIL;
});

document.querySelectorAll('.tel').forEach(function(a){
  a.href='tel:'+TEL;
});

var b=document.querySelector('.burger'),
u=document.getElementById('menu'),
sc=document.querySelector('.scrim');

function menu(open){
  if(!u||!sc||!b)return;
  u.classList.toggle('open',open);
  sc.classList.toggle('show',open);
  document.body.classList.toggle('menu-open',open);
  b.setAttribute('aria-expanded',open);
  b.setAttribute('aria-label',open?'Close menu':'Open menu');
}

if(b&&u&&sc){
  b.addEventListener('click',function(){
    menu(!u.classList.contains('open'));
  });
  sc.addEventListener('click',function(){
    menu(false);
  });
  u.addEventListener('click',function(e){
    if(e.target.closest('a'))menu(false);
  });
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'&&u.classList.contains('open')){
      menu(false);
      b.focus();
    }
  });
  window.matchMedia('(min-width:1241px)').addEventListener('change',function(){
    menu(false);
  });
}

var tp=document.querySelector('.top');
if(tp){
  tp.addEventListener('click',function(){
    window.scrollTo({top:0,behavior:'smooth'});
  });
  window.addEventListener('scroll',function(){
    tp.classList.toggle('show',window.scrollY>600);
  },{passive:true});
}

window.addEventListener('load',function(){
  var l=document.getElementById('loader');
  setTimeout(function(){
    l&&l.classList.add('off');
  },350);
});

if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(e.isIntersecting){
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  },{threshold:.12});

  document.querySelectorAll('.rv').forEach(function(e){
    io.observe(e);
  });

  var co=new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(!e.isIntersecting)return;
      co.unobserve(e.target);
      var t=+e.target.dataset.n,s=e.target.dataset.s||'',i=0;
      var id=setInterval(function(){
        i+=t/40;
        if(i>=t){
          i=t;
          clearInterval(id);
        }
        e.target.textContent=Math.round(i)+s;
      },30);
    });
  });

  document.querySelectorAll('[data-n]').forEach(function(e){
    co.observe(e);
  });
}

var form=document.getElementById('cf');
if(form)form.addEventListener('submit',function(e){
  e.preventDefault();
  var d=new FormData(form);
  var m="Hello GAMING PC!\nName: "+d.get('name')+"\nPhone: "+d.get('phone')+"\nService: "+d.get('service')+"\nMessage: "+d.get('message');
  window.open(wa(m),'_blank','noopener');
});
})();


(function(){
var EMAIL='drgagan.10@gmail.com';

function wa(m){
  return 'https://wa.me/918221826243?text='+encodeURIComponent(m);
}

document.querySelectorAll('.wf').forEach(function(f){

  function build(){
    var m='Hello GAMING PC!\n'+f.dataset.intro+'\n',x=[];

    [].forEach.call(f.elements,function(e){
      if(!e.name||!e.labels||!e.labels[0])return;
      var l=e.labels[0].textContent;
      if(e.value.trim())m+=l+': '+e.value.trim()+'\n';
      else x.push(l);
    });

    var w=f.querySelector('.warn');
    if(f.dataset.missing&&x.length){
      m+='Not selected yet: '+x.join(', ')+'\n';
      w.textContent='Missing components: '+x.join(', ');
      w.hidden=false;
    }else if(w){
      w.hidden=true;
    }
    return m;
  }

  function show(m){
    var s=f.querySelector('.sum');
    if(s){
      s.textContent=m;
      s.hidden=false;
    }
  }

  f.addEventListener('submit',function(e){
    e.preventDefault();
    var m=build();
    show(m);
    window.open(wa(m),'_blank','noopener');
  });

  f.addEventListener('click',function(e){
    var a=e.target.dataset&&e.target.dataset.act;
    if(!a)return;
    if(!f.checkValidity()){
      f.reportValidity();
      return;
    }
    var m=build();
    show(m);

    if(a==='mail'){
      location.href='mailto:'+EMAIL+'?subject='+encodeURIComponent('Enquiry for GAMING PC')+'&body='+encodeURIComponent(m);
    }
    if(a==='print')window.print();
  });

  f.addEventListener('reset',function(){
    f.querySelectorAll('.sum,.warn').forEach(function(s){
      s.hidden=true;
    });
  });
});

var c=document.getElementById('cmp');
if(c){
  var rows=c.querySelectorAll('tbody tr');

  function mark(){
    rows.forEach(function(r){
      var v=[].map.call(r.querySelectorAll('input'),function(i){
        return i.value.trim().toLowerCase();
      }).filter(Boolean);
      r.classList.toggle('diff',new Set(v).size>1);
    });
  }

  c.addEventListener('input',mark);

  var cmpsend=document.getElementById('cmpsend');
  if(cmpsend)cmpsend.addEventListener('click',function(){
    var m='Hello GAMING PC! Please help me compare these PCs:\n';
    rows.forEach(function(r){
      m+=r.cells[0].textContent+': '+[].map.call(r.querySelectorAll('input'),function(x){
        return x.value.trim()||'-';
      }).join(' | ')+'\n';
    });
    window.open(wa(m),'_blank','noopener');
  });

  var cmpreset=document.getElementById('cmpreset');
  if(cmpreset)cmpreset.addEventListener('click',function(){
    c.querySelectorAll('input').forEach(function(i){
      i.value='';
    });
    mark();
  });
}

var cc=document.getElementById('cc');
if(cc)cc.addEventListener('submit',function(e){
  e.preventDefault();

  var g=function(n){return cc.elements[n].value.trim();},
  n=function(k){return parseFloat(g(k));};

  function st(l,h,mn,rc){
    if(isNaN(mn)&&isNaN(rc))return l+': no requirement entered';
    if(!isNaN(mn)&&h<mn)return l+': below the minimum ('+h+' vs '+mn+')';
    if(!isNaN(rc)&&h<rc)return l+': meets the minimum, below recommended ('+h+' vs '+rc+')';
    return l+': meets the requirement';
  }

  var L=[
    'Game: '+g('game'),
    'Your PC: CPU '+(g('cpu')||'-')+', GPU '+(g('gpu')||'-')+', RAM '+g('ram')+' GB, free storage '+g('sto')+' GB',
    st('RAM',n('ram'),n('minram'),n('recram')),
    st('Storage',n('sto'),n('reqsto'),NaN),
    'Processor and graphics card need a manual check. This is an estimate based on requirements, not an FPS guarantee.'
  ];

  var o=document.getElementById('ccout');
  o.textContent=L.join('\n');
  o.hidden=false;

  var a=document.getElementById('ccwa');
  a.href=wa('Hello GAMING PC! Please check if my PC can run this game.\n'+L.join('\n'));
  a.hidden=false;
});

var lb=document.getElementById('lb');
if(lb){
  var ft=document.querySelectorAll('.fl'),
  tl=document.querySelectorAll('.tile');

  ft.forEach(function(b){
    b.addEventListener('click',function(){
      ft.forEach(function(x){
        x.setAttribute('aria-pressed',x===b);
      });
      document.querySelectorAll('.tile').forEach(function(t){
        t.hidden=b.dataset.f!=='all'&&t.dataset.c!==b.dataset.f;
      });
    });
  });

  tl.forEach(function(t){
    t.addEventListener('click',function(){
      var i=lb.querySelector('.lbi');
      i.style.cssText=t.style.cssText;
      i.textContent=t.textContent;
      lb.showModal();
    });
  });
}
})();


/* ===== Firebase features: Firestore only, no Storage ===== */

(function(){

var EMAIL='drgagan.10@gmail.com',
G='Hello GAMING PC! I am interested in ';

function wa(m){
  return 'https://wa.me/918221826243?text='+encodeURIComponent(m);
}

function fbm(){
  return import('./firebase.js');
}

function mk(t,x,c){
  var e=document.createElement(t);
  if(x)e.textContent=x;
  if(c)e.className=c;
  return e;
}

window.addEventListener('load',function(){
  fbm().catch(function(e){
    console.warn('Firebase module could not load:',e);
  });
});

function save(col,data){
  return fbm().then(function(fb){
    return fb.addDoc(
      fb.collection(fb.db,col),
      Object.assign({},data,{
        status:'new',
        createdAt:fb.serverTimestamp()
      })
    );
  }).catch(function(e){
    console.warn('Firestore save failed',e.code||e);
  });
}

function collect(f){
  var o={};
  [].forEach.call(f.elements,function(e){
    if(e.name&&e.labels&&e.labels[0]&&e.value.trim()){
      o[e.labels[0].textContent]=e.value.trim().slice(0,1000);
    }
  });
  return o;
}

document.querySelectorAll('form[data-col]').forEach(function(f){
  f.addEventListener('submit',function(){
    save(f.dataset.col,{
      type:f.dataset.intro.slice(0,40),
      fields:collect(f)
    });
  });
});

var cf=document.getElementById('cf');
if(cf)cf.addEventListener('submit',function(){
  var g=function(n){
    return cf.elements[n].value.trim().slice(0,1000);
  };
  save('enquiries',{
    type:'contact',
    fields:{
      Name:g('name'),
      Phone:g('phone'),
      Service:g('service'),
      Message:g('message')
    }
  });
});


/* PRODUCTS */

var pl=document.getElementById('plist');
if(pl)fbm().then(function(fb){

  var all=[],
  q=document.getElementById('psearch'),
  so=document.getElementById('psort'),
  ct=document.getElementById('pcatf');

  function draw(){
    var t=q.value.toLowerCase(),
    a=all.filter(function(p){
      return (!ct.value||p.category===ct.value)&&
      ((p.name||'')+' '+(p.brand||'')+' '+(p.specs||'')+' '+(p.description||'')).toLowerCase().indexOf(t)>-1;
    });

    var np=function(x){return x.price==null;};

    a.sort(function(x,y){
      return so.value==='low'
        ?np(x)-np(y)||x.price-y.price
        :so.value==='high'
        ?np(x)-np(y)||y.price-x.price
        :(x.name||'').localeCompare(y.name||'');
    });

    pl.textContent='';

    if(!a.length){
      pl.textContent=all.length
        ?'No products match your search.'
        :'Our product catalogue is being updated. Message us on WhatsApp for current options.';
      return;
    }

    a.forEach(function(p){
      var c=mk('div','','card');

      if(p.imageUrl){
        var i=new Image();
        i.src=p.imageUrl;
        i.alt=p.name||'Product';
        i.loading='lazy';
        c.append(i);
      }

      var d=mk('p',(p.description||'')+(p.specs?'\n'+p.specs:''));
      d.style.whiteSpace='pre-line';

      var b=mk('a','Enquire','btn o');
      b.target='_blank';
      b.rel='noopener';
      b.href=wa(G+'the '+p.name+'. Please share details.');

      c.append(
        mk('span',(p.brand?p.brand+' · ':'')+(p.category||'Product'),'badge'),
        mk('h3',p.name),
        d,
        mk('p',(p.price!=null?'₹'+Number(p.price).toLocaleString('en-IN'):'Price on enquiry')+' · '+(p.stock>0?'In stock':'Out of stock')),
        b
      );

      pl.append(c);
    });
  }

  fb.onSnapshot(
    fb.collection(fb.db,'products'),
    function(s){
      all=[];
      s.forEach(function(d){
        var v=d.data();
        v.id=d.id;
        all.push(v);
      });
      draw();
    },
    function(){
      pl.textContent='Could not load products. Message us for current options.';
    }
  );

  if(q)q.addEventListener('input',draw);
  if(so)so.addEventListener('change',draw);
  if(ct)ct.addEventListener('change',draw);

}).catch(function(e){
  console.warn('Products could not load:',e);
});


/* REVIEWS */

var rl=document.getElementById('rlist');
if(rl)fbm().then(function(fb){
  return fb.getDocs(
    fb.query(
      fb.collection(fb.db,'reviews'),
      fb.where('status','==','approved')
    )
  );
}).then(function(s){
  rl.textContent='';

  if(s.empty){
    rl.textContent='No approved reviews yet.';
    return;
  }

  s.forEach(function(d){
    var v=d.data(),
    c=mk('div','','card'),
    r=mk('p','★'.repeat(v.rating)+'☆'.repeat(5-v.rating));

    r.style.color='var(--red)';
    c.append(mk('h3',v.name),r,mk('p',v.text));
    rl.append(c);
  });
}).catch(function(){
  rl.textContent='Could not load reviews.';
});


var rf=document.getElementById('rf');
if(rf)rf.addEventListener('submit',function(e){
  e.preventDefault();

  var m=document.getElementById('rmsg'),
  f=rf.elements;

  fbm().then(function(fb){
    return fb.addDoc(
      fb.collection(fb.db,'reviews'),
      {
        name:f.name.value.trim().slice(0,60),
        rating:parseInt(f.rating.value,10),
        text:f.text.value.trim().slice(0,1000),
        status:'pending',
        createdAt:fb.serverTimestamp()
      }
    );
  }).then(function(){
    rf.reset();
    m.textContent='Thank you. Your review will appear after approval.';
  }).catch(function(){
    m.textContent='Could not submit the review. Please try again later.';
  });
});


/* GALLERY */

var gl=document.getElementById('gl'),
lb=document.getElementById('lb');

if(gl)fbm().then(function(fb){
  return fb.getDocs(fb.collection(fb.db,'gallery'));
}).then(function(s){

  if(s.empty)return;

  gl.textContent='';

  s.forEach(function(d){
    var v=d.data(),
    t=mk('button','','tile'),
    i=new Image();

    t.dataset.c=v.category||'pc';
    t.setAttribute('aria-label','Open '+(v.alt||'image'));

    i.src=v.imageUrl;
    i.alt=v.alt||'Gaming PC';
    i.loading='lazy';
    i.style.cssText='width:100%;height:100%;object-fit:cover;border-radius:12px';

    t.style.padding='0';
    t.append(i);

    t.addEventListener('click',function(){
      var b=lb.querySelector('.lbi');
      b.style.cssText='';
      b.textContent='';

      var z=i.cloneNode();
      z.style.cssText='max-width:100%;max-height:70vh;margin:auto';
      b.append(z);
      lb.showModal();
    });

    gl.append(t);
  });

}).catch(function(e){
  console.warn('Gallery could not load:',e);
});


/* GAMES CATALOGUE */

var GD="Grand Theft Auto V|Action & Open world|PC|;Grand Theft Auto V Enhanced|Action & Open world|PC|Enhanced edition;Red Dead Redemption 2|Action & Open world|PC|;Cyberpunk 2077|RPG|PC|;The Witcher 3: Wild Hunt|RPG|PC|;Watch Dogs 2|Action & Open world|PC|;Assassin's Creed series|Action & Open world|PC|Series;Far Cry series|Shooter|PC|Series;Elden Ring|RPG|PC|;Hogwarts Legacy|Action & Open world|PC|;Marvel's Spider-Man Remastered|Action & Open world|PC|;God of War|Action & Open world|PC|;Ghost of Tsushima|Action & Open world|PC|;Resident Evil series|Horror|PC|Series;Euro Truck Simulator 2|Simulation|PC|;Forza Horizon 5|Racing|PC|;Forza Motorsport|Racing|PC|;F1 series|Racing|PC|Series;Need for Speed series|Racing|PC|Series;Assetto Corsa|Racing|PC|;BeamNG.drive|Racing|PC|;Free Fire MAX|Battle Royale|Mobile via emulator|Mobile title;PUBG: Battlegrounds|Battle Royale|PC|;BGMI|Battle Royale|Mobile via emulator|Mobile title;Call of Duty: Warzone|Battle Royale|PC|;Call of Duty: Modern Warfare|Shooter|PC|;Call of Duty: Black Ops series|Shooter|PC|Series;Fortnite|Battle Royale|PC|;Apex Legends|Battle Royale|PC|;Valorant|Shooter|PC|;Counter-Strike 2|Shooter|PC|;Rainbow Six Siege|Shooter|PC|;Overwatch 2|Shooter|PC|;Rocket League|Sports|PC|;Minecraft Java Edition|Survival & Sandbox|PC|Java Edition;Minecraft Bedrock Edition|Survival & Sandbox|PC|Bedrock Edition;Terraria|Survival & Sandbox|PC|;ARK: Survival Evolved|Survival & Sandbox|PC|;Rust|Survival & Sandbox|PC|;Subnautica|Survival & Sandbox|PC|;The Forest|Survival & Sandbox|PC|;Sons of the Forest|Survival & Sandbox|PC|;Palworld|Survival & Sandbox|PC|;Raft|Survival & Sandbox|PC|;EA SPORTS FC series|Sports|PC|Series;eFootball|Sports|PC|;American Truck Simulator|Simulation|PC|;Microsoft Flight Simulator|Simulation|PC|;Dota 2|Strategy|PC|;Baldur's Gate 3|RPG|PC|;Stardew Valley|Simulation|PC|;Among Us|Party|PC|;Fall Guys|Party|PC|;Left 4 Dead 2|Shooter|PC|;Tekken 8|Fighting|PC|;Mortal Kombat 1|Fighting|PC|;Black Myth: Wukong|Action & Open world|PC|;Hollow Knight|Adventure|PC|;Dying Light 2|Action & Open world|PC|";

var FEAT=[
  'grand-theft-auto-v',
  'red-dead-redemption-2',
  'cyberpunk-2077',
  'counter-strike-2',
  'valorant',
  'minecraft-java-edition',
  'fortnite',
  'forza-horizon-5'
];

function gslug(t){
  return t.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
}

var BASE=GD.split(';').map(function(x){
  x=x.split('|');
  return {
    title:x[0],
    genre:x[1],
    platform:x[2],
    edition:x[3]
  };
});

function reqGame(t){
  window.open(
    wa('Hello GAMING PC! I want to request legitimate installation of '+t+' on my PC in Amritsar. Please share availability, process and charges.'),
    '_blank',
    'noopener'
  );
  save('bookings',{type:'game install',fields:{Game:t}});
}

var ga=document.getElementById('gall');

if(ga){

  var fs={},
  gq=document.getElementById('gq'),
  gg=document.getElementById('gg'),
  gp=document.getElementById('gp'),
  gs=document.getElementById('gs'),
  gd=document.getElementById('gd'),
  cur='';

  BASE.map(function(x){
    return x.genre;
  }).filter(function(v,i,a){
    return a.indexOf(v)===i;
  }).sort().forEach(function(g){
    var o=mk('option',g);
    gg.append(o);
  });

  document.getElementById('gdr').addEventListener('click',function(){
    reqGame(cur);
  });

  function hue(t){
    var h=0;
    for(var i=0;i<t.length;i++){
      h=(h+t.charCodeAt(i)*7)%360;
    }
    return h;
  }

  function note(g){
    return g.platform==='Mobile via emulator'
      ?'Mobile game. On PC it runs only through a supported, legitimate emulator where applicable. Ask us for details.'
      :'Installed through official launchers with your legally obtained licence.';
  }

  function card(g){
    var c=mk('article','','card gc'),
    a=mk('div','','gart');

    a.style.setProperty('--h',hue(g.title));

    if(g.imageUrl){
      var i=new Image();
      i.src=g.imageUrl;
      i.alt=g.title+' artwork';
      i.loading='lazy';
      i.onerror=function(){
        i.remove();
        a.textContent=g.title.charAt(0);
      };
      a.append(i);
    }else{
      a.textContent=g.title.charAt(0);
    }

    var b1=mk('button','View Details','btn o'),
    b2=mk('button','Request Installation','btn');

    b1.type=b2.type='button';

    b1.addEventListener('click',function(){
      cur=g.title;
      document.getElementById('gdt').textContent=g.title;
      document.getElementById('gdm').textContent=g.genre+' · '+g.platform+(g.edition?' · '+g.edition:'')+' · '+(g.status||'Ask for availability');
      document.getElementById('gdn').textContent=note(g);
      gd.showModal();
    });

    b2.addEventListener('click',function(){
      reqGame(g.title);
    });

    c.append(
      a,
      mk('h3',g.title),
      mk('p',g.genre+' · '+g.platform+(g.edition?' · '+g.edition:'')),
      mk('span',g.status||'Ask for availability','badge'),
      b1,
      b2
    );

    return c;
  }

  function allGames(){
    var m={},out=[];

    BASE.forEach(function(b){
      var o=Object.assign({},b,fs[gslug(b.title)]||{});
      m[gslug(b.title)]=1;
      out.push(o);
    });

    Object.keys(fs).forEach(function(k){
      if(!m[k]&&fs[k].title)out.push(fs[k]);
    });

    return out;
  }

  function render(){
    var q=gq.value.toLowerCase(),
    l=allGames().filter(function(g){
      return (!gg.value||g.genre===gg.value)&&
      (!gp.value||g.platform===gp.value)&&
      g.title.toLowerCase().indexOf(q)>-1;
    });

    l.sort(function(x,y){
      return gs.value==='za'
        ?y.title.localeCompare(x.title)
        :x.title.localeCompare(y.title);
    });

    var fe=document.getElementById('gfeat'),
    filt=q||gg.value||gp.value;

    fe.textContent='';
    ga.textContent='';
    document.getElementById('gfw').hidden=!!filt;

    if(!filt){
      l.filter(function(g){
        return FEAT.indexOf(gslug(g.title))>-1;
      }).forEach(function(g){
        fe.append(card(g));
      });
    }

    l.forEach(function(g){
      ga.append(card(g));
    });

    document.getElementById('gnone').hidden=l.length>0;
  }

  [gq,gg,gp,gs].forEach(function(e){
    e.addEventListener('input',render);
  });

  render();

  fbm().then(function(fb){
    fb.onSnapshot(
      fb.collection(fb.db,'games'),
      function(s){
        fs={};
        s.forEach(function(d){
          fs[d.id]=d.data();
        });
        render();
      },
      function(e){
        console.warn('Games could not load:',e);
      }
    );
  }).catch(function(e){
    console.warn('Games Firebase error:',e);
  });
}


/* GLOBAL SEARCH */

var sq=document.getElementById('sq');

if(sq){

  var IDX='Home|index.html|Gaming PC in Amritsar;Gaming PCs|gaming-pcs.html|Gaming PCs and accessories;Custom Builds|custom-builds.html|Custom gaming PC builds;Game Installation|game-installation.html|Game library and installation;PCs for Work|pc-for-work.html|Office and professional computers;Services|services.html|Setup, upgrades, installation;PC Finder|pc-finder.html|Find a PC by budget;PC Configurator|pc-configurator.html|Build your own PC;PC Comparison|pc-comparison.html|Compare PCs;Game Compatibility|game-compatibility.html|Check game requirements;Gallery|gallery.html|Photos of builds;Request a Quote|quotation.html|Quotation request;Book Installation|booking.html|Installation booking request;Reviews|reviews.html|Customer reviews;About|about.html|About GAMING PC;Contact|contact.html|WhatsApp, email, call'.split(';').map(function(x){
    x=x.split('|');
    return {t:x[0],u:x[1],d:x[2],k:'Pages'};
  });

  var FQ=[
    'Is a gaming PC available right now?',
    'Can you build a custom PC?',
    'How does game installation work?',
    'Do you offer home installation?',
    'Can you upgrade my PC?',
    'What payment methods are accepted?',
    'Is there a warranty?',
    'How much does it cost?',
    'How do I get technical support?'
  ].map(function(q){
    return {t:q,u:'faq.html',d:'',k:'FAQ'};
  });

  var pr=[];

  function run(){
    var q=sq.value.trim().toLowerCase(),
    f=document.getElementById('sf').value,
    sr=document.getElementById('sr'),
    sn=document.getElementById('sn');

    sr.textContent='';

    if(!q){
      sn.hidden=true;
      return;
    }

    var all=IDX.concat(
      FQ,
      BASE.map(function(g){
        return {t:g.title,u:'game-installation.html',d:g.genre,k:'Games'};
      }),
      pr
    );

    var r=all.filter(function(x){
      return (!f||x.k===f)&&
      (x.t+' '+x.d).toLowerCase().indexOf(q)>-1;
    }).slice(0,40);

    sn.hidden=r.length>0;

    r.forEach(function(x){
      var li=mk('li'),
      a=mk('a',x.t);

      a.href=x.u;
      li.append(a,mk('span',' · '+x.k+(x.d?' · '+x.d:'')));
      sr.append(li);
    });
  }

  sq.addEventListener('input',run);
  document.getElementById('sf').addEventListener('change',run);

  fbm().then(function(fb){
    return fb.getDocs(fb.collection(fb.db,'products'));
  }).then(function(s){
    s.forEach(function(d){
      var v=d.data();
      pr.push({
        t:v.name||'',
        u:'gaming-pcs.html',
        d:(v.brand||'')+' '+(v.category||''),
        k:'Products'
      });
    });
    run();
  }).catch(function(e){
    console.warn('Search products error:',e);
  });
}


/* ADMIN DASHBOARD — FIRESTORE ONLY */

var adm=document.getElementById('adm');

if(adm)fbm().then(function(fb){

  var li=document.getElementById('login'),
  pn=document.getElementById('panel'),
  er=document.getElementById('aerr'),
  ls=document.getElementById('alist'),
  sc=document.getElementById('sec'),
  pf=document.getElementById('pform');

  function err(e){
    console.error('Admin Firebase error:',e);
    er.textContent='Error: '+(e.code||e.message);
  }

  li.addEventListener('submit',function(e){
    e.preventDefault();
    er.textContent='';

    fb.signInWithEmailAndPassword(
      fb.auth,
      li.elements.email.value,
      li.elements.pw.value
    ).catch(err);
  });

  document.getElementById('logout').addEventListener('click',function(){
    fb.signOut(fb.auth).catch(err);
  });

  fb.onAuthStateChanged(fb.auth,function(u){
    li.hidden=!!u;
    pn.hidden=!u;

    if(u){
      er.textContent='Signed in. Loading administrator data...';
      load();
    }else{
      ls.textContent='';
      er.textContent='';
    }
  },err);

  sc.addEventListener('change',load);

  function upd(id,o){
    fb.updateDoc(
      fb.doc(fb.db,sc.value,id),
      o
    ).then(load).catch(err);
  }

  function load(){

    var c=sc.value,
    sh={pp:'products',gm:'games',gp:'gallery'};

    er.textContent='';

    pf.hidden=!(c==='products'||c==='games'||c==='gallery');

    Object.keys(sh).forEach(function(k){
      pf.querySelector('.'+k).hidden=sh[k]!==c;
    });

    ls.textContent='Loading...';

    fb.getDocs(fb.collection(fb.db,c)).then(function(s){

      ls.textContent='';

      if(s.empty){
        ls.textContent='No records yet.';
        return;
      }

      s.forEach(function(d){

        var v=d.data(),
        k=mk('div','','card');

        k.append(mk('pre',JSON.stringify(v,null,1)));

        function btn(l,fn){
          var b=mk('button',l,'btn o');
          b.type='button';
          b.addEventListener('click',fn);
          k.append(b);
        }

        if(c==='reviews'){
          btn('Approve',function(){
            upd(d.id,{status:'approved'});
          });

          btn('Reject',function(){
            upd(d.id,{status:'rejected'});
          });
        }
        else if(c==='products'||c==='games'){

          btn('Edit',function(){

            var f=pf.elements;
            f.docid.value=d.id;

            if(c==='products'){
              f.name.value=v.name||'';
              f.brand.value=v.brand||'';
              f.pcat.value=v.category||'';
              f.desc.value=v.description||'';
              f.specs.value=v.specs||'';
              f.price.value=v.price==null?'':v.price;
              f.stock.value=v.stock||0;
              f.imgurl.value=v.imageUrl||'';
            }
            else{
              f.name.value=v.title||'';
              f.genre.value=v.genre||'';
              f.plat.value=v.platform||'PC';
              f.stat.value=v.status||'Available';
              f.imgurl.value=v.imageUrl||'';
            }

            pf.scrollIntoView();
          });
        }
        else if(c!=='gallery'){
          btn('Mark done',function(){
            upd(d.id,{status:'done'});
          });
        }

        btn('Delete',function(){
          if(confirm('Delete this record?')){
            fb.deleteDoc(
              fb.doc(fb.db,c,d.id)
            ).then(load).catch(err);
          }
        });

        ls.append(k);
      });

    }).catch(err);
  }


  /* ADMIN SAVE — NO FIREBASE STORAGE */

  pf.addEventListener('submit',function(e){

    e.preventDefault();

    var c=sc.value,
    f=pf.elements,
    id=f.docid.value,
    data,
    imageUrl=f.imgurl.value.trim();

    if(c==='products'){

      data={
        name:f.name.value.trim(),
        brand:f.brand.value.trim(),
        category:f.pcat.value,
        description:f.desc.value.trim(),
        specs:f.specs.value.trim(),
        price:f.price.value===''?null:Number(f.price.value),
        stock:Number(f.stock.value)||0
      };

    }
    else if(c==='games'){

      data={
        title:f.name.value.trim(),
        genre:f.genre.value.trim(),
        platform:f.plat.value,
        status:f.stat.value
      };

      id=gslug(data.title);

    }
    else{

      data={
        category:f.cat.value,
        alt:f.name.value.trim()
      };

    }

    if(imageUrl){
      data.imageUrl=imageUrl;
    }

    if(c==='gallery'&&!imageUrl){
      err(new Error('Please enter an image URL for the gallery.'));
      return;
    }

    var operation=id
      ?fb.setDoc(
          fb.doc(fb.db,c,id),
          Object.assign({},data,{
            updatedAt:fb.serverTimestamp()
          }),
          {merge:true}
        )
      :fb.addDoc(
          fb.collection(fb.db,c),
          Object.assign({},data,{
            createdAt:fb.serverTimestamp()
          })
        );

    operation.then(function(){
      pf.reset();
      load();
    }).catch(err);

  });

}).catch(function(e){

  console.error('Firebase could not be loaded:',e);

  var aerr=document.getElementById('aerr');
  if(aerr){
    aerr.textContent='Firebase could not be loaded: '+(e.message||e);
  }

});

})();
