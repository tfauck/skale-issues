#!/usr/bin/env node


var sc = require('skale-engine').context()

function filter(d) {
	var p0 = 0	// forced
	d = d / 2; var p1 = d % 2
	d = (d - p1) / 2; var p2 = d % 2
	d = (d - p2) / 2; var p3 = d % 2
	var p4 = 0	// torus
	d = (d - p3) / 4; var p5 = d % 2
	d = (d - p5) / 2; var p6 = d % 2
	d = (d - p6) / 2; var p7 = d % 2
	if (p0 == p1 && p1 == p2 && p5 == p6 && p6 == p7) return 0

	d = (d - p7) / 2; var p8 = d % 2
	if (p0 == p2 && p1 == p3 && p5 == p7 && p6 == p8) return 0
	if (p1 == p2 && p2 == p3 && p6 == p7 && p7 == p8) return 0

	d = (d - p8) / 2; var p9 = d % 2
	if (p5 != p9) return 0		// torus
	if (p0 == p3 && p1 == p4 && p5 == p8 && p6 == p9) return 0
	if (p1 == p3 && p2 == p4 && p6 == p8 && p7 == p9) return 0
	if (p2 == p3 && p3 == p4 && p7 == p8 && p8 == p9) return 0

	d = (d - p9) / 2; var p10 = d % 2
	d = (d - p10) / 2; var p11 = d % 2
	if (p0 == p5 && p1 == p6 && p5 == p10 && p6 == p11) return 0
	if (p1 == p5 && p2 == p6 && p6 == p10 && p7 == p11) return 0
	if (p2 == p5 && p3 == p6 && p7 == p10 && p8 == p11) return 0
	if (p3 == p5 && p4 == p6 && p8 == p10 && p9 == p11) return 0

	d = (d - p11) / 2; var p12 = d % 2
	if (p0 == p6 && p1 == p7 && p5 == p11 && p6 == p12) return 0
	if (p1 == p6 && p2 == p7 && p6 == p11 && p7 == p12) return 0
	if (p2 == p6 && p3 == p7 && p7 == p11 && p8 == p12) return 0
	if (p3 == p6 && p4 == p7 && p8 == p11 && p9 == p12) return 0
	if (p5 == p6 && p6 == p7 && p10 == p11 && p11 == p12) return 0

	d = (d - p12) / 2; var p13 = d % 2
	if (p0 == p7 && p1 == p8 && p5 == p12 && p6 == p13) return 0
	if (p1 == p7 && p2 == p8 && p6 == p12 && p7 == p13) return 0
	if (p2 == p7 && p3 == p8 && p7 == p12 && p8 == p13) return 0
	if (p3 == p7 && p4 == p8 && p8 == p12 && p9 == p13) return 0
	if (p5 == p7 && p6 == p8 && p10 == p12 && p11 == p13) return 0
	if (p6 == p7 && p7 == p8 && p11 == p12 && p12 == p13) return 0

	d = (d - p13) / 2; var p14 = d % 2
	if (p10 != p14) return 0	// torus
	if (p0 == p8 && p1 == p9 && p5 == p13 && p6 == p14) return 0
	if (p1 == p8 && p2 == p9 && p6 == p13 && p7 == p14) return 0
	if (p2 == p8 && p3 == p9 && p7 == p13 && p8 == p14) return 0
	if (p3 == p8 && p4 == p9 && p8 == p13 && p9 == p14) return 0
	if (p5 == p8 && p6 == p9 && p10 == p13 && p11 == p14) return 0
	if (p6 == p8 && p7 == p9 && p11 == p13 && p12 == p14) return 0
	if (p7 == p8 && p8 == p9 && p12 == p13 && p13 == p14) return 0

	d = (d - p14) / 2; var p15 = d % 2
	d = (d - p15) / 2; var p16 = d % 2
	if (p0 == p10 && p1 == p11 && p5 == p15 && p6 == p16) return 0
	if (p1 == p10 && p2 == p11 && p6 == p15 && p7 == p16) return 0
	if (p2 == p10 && p3 == p11 && p7 == p15 && p8 == p16) return 0
	if (p3 == p10 && p4 == p11 && p8 == p15 && p9 == p16) return 0
	if (p5 == p10 && p6 == p11 && p10 == p15 && p11 == p16) return 0
	if (p6 == p10 && p7 == p11 && p11 == p15 && p12 == p16) return 0
	if (p7 == p10 && p8 == p11 && p12 == p15 && p13 == p16) return 0
	if (p8 == p10 && p9 == p11 && p13 == p15 && p14 == p16) return 0

	d = (d - p16) / 2; var p17 = d % 2
	if (p0 == p11 && p1 == p12 && p5 == p16 && p6 == p17) return 0
	if (p1 == p11 && p2 == p12 && p6 == p16 && p7 == p17) return 0
	if (p2 == p11 && p3 == p12 && p7 == p16 && p8 == p17) return 0
	if (p3 == p11 && p4 == p12 && p8 == p16 && p9 == p17) return 0
	if (p5 == p11 && p6 == p12 && p10 == p16 && p11 == p17) return 0
	if (p6 == p11 && p7 == p12 && p11 == p16 && p12 == p17) return 0
	if (p7 == p11 && p8 == p12 && p12 == p16 && p13 == p17) return 0
	if (p8 == p11 && p9 == p12 && p13 == p16 && p14 == p17) return 0
	if (p10 == p11 && p11 == p12 && p15 == p16 && p16 == p17) return 0

	d = (d - p17) / 2; var p18 = d % 2
	if (p0 == p12 && p1 == p13 && p5 == p17 && p6 == p18) return 0
	if (p1 == p12 && p2 == p13 && p6 == p17 && p7 == p18) return 0
	if (p2 == p12 && p3 == p13 && p7 == p17 && p8 == p18) return 0
	if (p3 == p12 && p4 == p13 && p8 == p17 && p9 == p18) return 0
	if (p5 == p12 && p6 == p13 && p10 == p17 && p11 == p18) return 0
	if (p6 == p12 && p7 == p13 && p11 == p17 && p12 == p18) return 0
	if (p7 == p12 && p8 == p13 && p12 == p17 && p13 == p18) return 0
	if (p8 == p12 && p9 == p13 && p13 == p17 && p14 == p18) return 0
	if (p10 == p12 && p11 == p13 && p15 == p17 && p16 == p18) return 0
	if (p11 == p12 && p12 == p13 && p16 == p17 && p17 == p18) return 0

	d = (d - p18) / 2; var p19 = d % 2
	if (p15 != p19) return 0	// torus
	if (p0 == p13 && p1 == p14 && p5 == p18 && p6 == p19) return 0
	if (p1 == p13 && p2 == p14 && p6 == p18 && p7 == p19) return 0
	if (p2 == p13 && p3 == p14 && p7 == p18 && p8 == p19) return 0
	if (p3 == p13 && p4 == p14 && p8 == p18 && p9 == p19) return 0
	if (p5 == p13 && p6 == p14 && p10 == p18 && p11 == p19) return 0
	if (p6 == p13 && p7 == p14 && p11 == p18 && p12 == p19) return 0
	if (p7 == p13 && p8 == p14 && p12 == p18 && p13 == p19) return 0
	if (p8 == p13 && p9 == p14 && p13 == p18 && p14 == p19) return 0
	if (p10 == p13 && p11 == p14 && p15 == p18 && p16 == p19) return 0
	if (p11 == p13 && p12 == p14 && p16 == p18 && p17 == p19) return 0
	if (p12 == p13 && p13 == p14 && p17 == p18 && p18 == p19) return 0

	var p20 = 0	// torus
	d = (d - p19) / 4; var p21 = d % 2
	if (p0 == p15 && p1 == p16 && p5 == p20 && p6 == p21) return 0
	if (p1 == p15 && p2 == p16 && p6 == p20 && p7 == p21) return 0
	if (p2 == p15 && p3 == p16 && p7 == p20 && p8 == p21) return 0
	if (p3 == p15 && p4 == p16 && p8 == p20 && p9 == p21) return 0
	if (p5 == p15 && p6 == p16 && p10 == p20 && p11 == p21) return 0
	if (p6 == p15 && p7 == p16 && p11 == p20 && p12 == p21) return 0
	if (p7 == p15 && p8 == p16 && p12 == p20 && p13 == p21) return 0
	if (p8 == p15 && p9 == p16 && p13 == p20 && p14 == p21) return 0
	if (p10 == p15 && p11 == p16 && p15 == p20 && p16 == p21) return 0
	if (p11 == p15 && p12 == p16 && p16 == p20 && p17 == p21) return 0
	if (p12 == p15 && p13 == p16 && p17 == p20 && p18 == p21) return 0
	if (p13 == p15 && p14 == p16 && p18 == p20 && p19 == p21) return 0

	d = (d - p21) / 2; var p22 = d % 2
	if (p0 == p16 && p1 == p17 && p5 == p21 && p6 == p22) return 0
	if (p1 == p16 && p2 == p17 && p6 == p21 && p7 == p22) return 0
	if (p2 == p16 && p3 == p17 && p7 == p21 && p8 == p22) return 0
	if (p3 == p16 && p4 == p17 && p8 == p21 && p9 == p22) return 0
	if (p5 == p16 && p6 == p17 && p10 == p21 && p11 == p22) return 0
	if (p6 == p16 && p7 == p17 && p11 == p21 && p12 == p22) return 0
	if (p7 == p16 && p8 == p17 && p12 == p21 && p13 == p22) return 0
	if (p8 == p16 && p9 == p17 && p13 == p21 && p14 == p22) return 0
	if (p10 == p16 && p11 == p17 && p15 == p21 && p16 == p22) return 0
	if (p11 == p16 && p12 == p17 && p16 == p21 && p17 == p22) return 0
	if (p12 == p16 && p13 == p17 && p17 == p21 && p18 == p22) return 0
	if (p13 == p16 && p14 == p17 && p18 == p21 && p19 == p22) return 0
	if (p15 == p16 && p16 == p17 && p20 == p21 && p21 == p22) return 0

	d = (d - p22) / 2; var p23 = d % 2
	if (p1 != p21 || p2 != p22 || p3 != p23) return 0	// torus
	if (p0 == p17 && p1 == p18 && p5 == p22 && p6 == p23) return 0
	if (p1 == p17 && p2 == p18 && p6 == p22 && p7 == p23) return 0
	if (p2 == p17 && p3 == p18 && p7 == p22 && p8 == p23) return 0
	if (p3 == p17 && p4 == p18 && p8 == p22 && p9 == p23) return 0
	if (p5 == p17 && p6 == p18 && p10 == p22 && p11 == p23) return 0
	if (p6 == p17 && p7 == p18 && p11 == p22 && p12 == p23) return 0
	if (p7 == p17 && p8 == p18 && p12 == p22 && p13 == p23) return 0
	if (p8 == p17 && p9 == p18 && p13 == p22 && p14 == p23) return 0
	if (p10 == p17 && p11 == p18 && p15 == p22 && p16 == p23) return 0
	if (p11 == p17 && p12 == p18 && p16 == p22 && p17 == p23) return 0
	if (p12 == p17 && p13 == p18 && p17 == p22 && p18 == p23) return 0
	if (p13 == p17 && p14 == p18 && p18 == p22 && p19 == p23) return 0
	if (p15 == p17 && p16 == p18 && p20 == p22 && p21 == p23) return 0
	if (p16 == p17 && p17 == p18 && p21 == p22 && p22 == p23) return 0

	var p24 = 0	// torus
	if (p0 == p18 && p1 == p19 && p5 == p23 && p6 == p24) return 0
	if (p1 == p18 && p2 == p19 && p6 == p23 && p7 == p24) return 0
	if (p2 == p18 && p3 == p19 && p7 == p23 && p8 == p24) return 0
	if (p3 == p18 && p4 == p19 && p8 == p23 && p9 == p24) return 0
	if (p5 == p18 && p6 == p19 && p10 == p23 && p11 == p24) return 0
	if (p6 == p18 && p7 == p19 && p11 == p23 && p12 == p24) return 0
	if (p7 == p18 && p8 == p19 && p12 == p23 && p13 == p24) return 0
	if (p8 == p18 && p9 == p19 && p13 == p23 && p14 == p24) return 0
	if (p10 == p18 && p11 == p19 && p15 == p23 && p16 == p24) return 0
	if (p11 == p18 && p12 == p19 && p16 == p23 && p17 == p24) return 0
	if (p12 == p18 && p13 == p19 && p17 == p23 && p18 == p24) return 0
	if (p13 == p18 && p14 == p19 && p18 == p23 && p19 == p24) return 0
	if (p15 == p18 && p16 == p19 && p20 == p23 && p21 == p24) return 0
	if (p16 == p18 && p17 == p19 && p21 == p23 && p22 == p24) return 0
	if (p17 == p18 && p18 == p19 && p22 == p23 && p23 == p24) return 0

	return 1
}

var i
var v = []
for (i = 0; i < Math.pow(2, 24); i = i + 2) {		// p0, p24 = 0
	if (!( ((i >> 4) % 2) || ((i >> 20) % 2) ))	// p4, p20 = 0
		v[i] = i
}
sc.parallelize(v).
	filter(filter).
	collect().
	toArray().
	then(function(res){console.log(res);sc.end()})
