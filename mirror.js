let raw = `mirror.govtp.ru
mirror.yandex.ru
nl.alpinelinux.org
dl-2.alpinelinux.org
dl-3.alpinelinux.org
dl-4.alpinelinux.org
dl-5.alpinelinux.org
dl-6.alpinelinux.org
dl-8.alpinelinux.org
distrib-coffee.ipsl.jussieu.fr
mirrors.gigenet.com
mirror1.hs-esslingen.de
liskamm.alpinelinux.uk
mirrors.2f30.org
mirror.leaseweb.com
repository.fit.cvut.cz
alpine.mirror.far.fi
lasca.ic.unicamp.br
alpinelinux.c3sl.ufpr.br
mirrors.cug.edu.cn
mirrors.cicku.me
alpine.mirror.wearetriple.com`

const os = require('os')
const fs =require('fs-extra')
const sh = require('shelljs')


let mirrors = raw.split('\n')
console.log(mirrors)

