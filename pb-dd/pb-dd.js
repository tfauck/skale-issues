#!/usr/bin/env node

var sc = require('skale-engine').context();
console.time('dedor')
var da0 = sc.parallelize([0]);		// forced
var da1 = sc.parallelize([0, 1])
var da2 = sc.parallelize([0, 1])
var da3 = sc.parallelize([0, 1])
var da4 = sc.parallelize([0]);		// torus
var da5 = sc.parallelize([0, 1])
var da6 = sc.parallelize([0, 1])
var da7 = sc.parallelize([0, 1])
var da8 = sc.parallelize([0, 1])
var da9 = sc.parallelize([0, 1])
var da10 = sc.parallelize([0, 1])
var da11 = sc.parallelize([0, 1])
var da12 = sc.parallelize([0, 1])
var da13 = sc.parallelize([0, 1])
var da14 = sc.parallelize([0, 1])
var da15 = sc.parallelize([0, 1])
var da16 = sc.parallelize([0, 1])
var da17 = sc.parallelize([0, 1])
var da18 = sc.parallelize([0, 1])
var da19 = sc.parallelize([0, 1])
var da20 = sc.parallelize([0]);		// torus
var da21 = sc.parallelize([0, 1])
var da22 = sc.parallelize([0, 1])
var da23 = sc.parallelize([0, 1])
var da24 = sc.parallelize([0]);		// torus
var das = sc.parallelize([[]])
//  0  1  2
function mapper2(data) {
	var p0 = data[0][0]
	var p1 = data[0][1]
	var p2 = data[1]
	return [ p0, p1, p2 ]
}
//  0  1  2  3
function mapper3(data) {
	var p0 = data[0][0]
	var p1 = data[0][1]
	var p2 = data[0][2]
	var p3 = data[1]
	return [ p0, p1, p2, p3 ]
}
//  0  1  2  3  4
function mapper4(data) {
	var p0 = data[0][0]
	var p1 = data[0][1]
	var p2 = data[0][2]
	var p3 = data[0][3]
	var p4 = data[1]
	return [ p0, p1, p2, p3, p4 ]
}
//  0  1  2  3  4
//  5
function mapper5(data) {
	var p0 = data[0][0]
	var p1 = data[0][1]
	var p2 = data[0][2]
	var p3 = data[0][3]
	var p4 = data[0][4]
	var p5 = data[1]
	return [ p0, p1, p2, p3, p4, p5 ]
}
//  0  1  2  3  4
//  5  6
function mapper6(data) {
	var p0 = data[0][0]
	var p1 = data[0][1]
	var p2 = data[0][2]
	var p3 = data[0][3]
	var p4 = data[0][4]
	var p5 = data[0][5]
	var p6 = data[1]
	return [ p0, p1, p2, p3, p4, p5, p6 ]
}
//  0  1  2  3  4
//  5  6  7
function mapper7(data) {
	var p0 = data[0][0]
	var p1 = data[0][1]
	var p2 = data[0][2]
	var p3 = data[0][3]
	var p4 = data[0][4]
	var p5 = data[0][5]
	var p6 = data[0][6]
	var p7 = data[1]
	if (p0 == p1 && p1 == p2 && p5 == p6 && p6 == p7) return []
	return [ p0, p1, p2, p3, p4, p5, p6, p7 ]
}
//  0  1  2  3  4
//  5  6  7  8
function mapper8(data) {
	var p0 = data[0][0]
	var p1 = data[0][1]
	var p2 = data[0][2]
	var p3 = data[0][3]
	var p4 = data[0][4]
	var p5 = data[0][5]
	var p6 = data[0][6]
	var p7 = data[0][7]
	var p8 = data[1]
	if (p0 == p2 && p1 == p3 && p5 == p7 && p6 == p8) return []
	if (p1 == p2 && p2 == p3 && p6 == p7 && p7 == p8) return []
	return [ p0, p1, p2, p3, p4, p5, p6, p7, p8 ]
}
//  0  1  2  3  4
//  5  6  7  8  9
function mapper9(data) {
	var p0 = data[0][0]
	var p1 = data[0][1]
	var p2 = data[0][2]
	var p3 = data[0][3]
	var p4 = data[0][4]
	var p5 = data[0][5]
	var p6 = data[0][6]
	var p7 = data[0][7]
	var p8 = data[0][8]
	var p9 = data[1]
	if (p5 != p9) return []		// torus
	if (p0 == p3 && p1 == p4 && p5 == p8 && p6 == p9) return []
	if (p1 == p3 && p2 == p4 && p6 == p8 && p7 == p9) return []
	if (p2 == p3 && p3 == p4 && p7 == p8 && p8 == p9) return []
	return [ p0, p1, p2, p3, p4, p5, p6, p7, p8, p9 ]
}
//  0  1  2  3  4
//  5  6  7  8  9
// 10
function mapper10(data) {
	var p0 = data[0][0]
	var p1 = data[0][1]
	var p2 = data[0][2]
	var p3 = data[0][3]
	var p4 = data[0][4]
	var p5 = data[0][5]
	var p6 = data[0][6]
	var p7 = data[0][7]
	var p8 = data[0][8]
	var p9 = data[0][9]
	var p10 = data[1]
	return [ p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10 ]
}
//  0  1  2  3  4
//  5  6  7  8  9
// 10 11
function mapper11(data) {
	var p0 = data[0][0]
	var p1 = data[0][1]
	var p2 = data[0][2]
	var p3 = data[0][3]
	var p4 = data[0][4]
	var p5 = data[0][5]
	var p6 = data[0][6]
	var p7 = data[0][7]
	var p8 = data[0][8]
	var p9 = data[0][9]
	var p10 = data[0][10]
	var p11 = data[1]
	if (p0 == p5 && p1 == p6 && p5 == p10 && p6 == p11) return []
	if (p1 == p5 && p2 == p6 && p6 == p10 && p7 == p11) return []
	if (p2 == p5 && p3 == p6 && p7 == p10 && p8 == p11) return []
	if (p3 == p5 && p4 == p6 && p8 == p10 && p9 == p11) return []
	return [ p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11 ]
}
//  0  1  2  3  4
//  5  6  7  8  9
// 10 11 12
function mapper12(data) {
	var p0 = data[0][0]
	var p1 = data[0][1]
	var p2 = data[0][2]
	var p3 = data[0][3]
	var p4 = data[0][4]
	var p5 = data[0][5]
	var p6 = data[0][6]
	var p7 = data[0][7]
	var p8 = data[0][8]
	var p9 = data[0][9]
	var p10 = data[0][10]
	var p11 = data[0][11]
	var p12 = data[1]
	if (p0 == p6 && p1 == p7 && p5 == p11 && p6 == p12) return []
	if (p1 == p6 && p2 == p7 && p6 == p11 && p7 == p12) return []
	if (p2 == p6 && p3 == p7 && p7 == p11 && p8 == p12) return []
	if (p3 == p6 && p4 == p7 && p8 == p11 && p9 == p12) return []
	if (p5 == p6 && p6 == p7 && p10 == p11 && p11 == p12) return []
	return [ p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12 ]
}
//  0  1  2  3  4
//  5  6  7  8  9
// 10 11 12 13
function mapper13(data) {
	var p0 = data[0][0]
	var p1 = data[0][1]
	var p2 = data[0][2]
	var p3 = data[0][3]
	var p4 = data[0][4]
	var p5 = data[0][5]
	var p6 = data[0][6]
	var p7 = data[0][7]
	var p8 = data[0][8]
	var p9 = data[0][9]
	var p10 = data[0][10]
	var p11 = data[0][11]
	var p12 = data[0][12]
	var p13 = data[1]
	if (p0 == p7 && p1 == p8 && p5 == p12 && p6 == p13) return []
	if (p1 == p7 && p2 == p8 && p6 == p12 && p7 == p13) return []
	if (p2 == p7 && p3 == p8 && p7 == p12 && p8 == p13) return []
	if (p3 == p7 && p4 == p8 && p8 == p12 && p9 == p13) return []
	if (p5 == p7 && p6 == p8 && p10 == p12 && p11 == p13) return []
	if (p6 == p7 && p7 == p8 && p11 == p12 && p12 == p13) return []
	return [ p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13 ]
}
//  0  1  2  3  4
//  5  6  7  8  9
// 10 11 12 13 14
function mapper14(data) {
	var p0 = data[0][0]
	var p1 = data[0][1]
	var p2 = data[0][2]
	var p3 = data[0][3]
	var p4 = data[0][4]
	var p5 = data[0][5]
	var p6 = data[0][6]
	var p7 = data[0][7]
	var p8 = data[0][8]
	var p9 = data[0][9]
	var p10 = data[0][10]
	var p11 = data[0][11]
	var p12 = data[0][12]
	var p13 = data[0][13]
	var p14 = data[1]
	if (p10 != p14) return []	// torus
	if (p0 == p8 && p1 == p9 && p5 == p13 && p6 == p14) return []
	if (p1 == p8 && p2 == p9 && p6 == p13 && p7 == p14) return []
	if (p2 == p8 && p3 == p9 && p7 == p13 && p8 == p14) return []
	if (p3 == p8 && p4 == p9 && p8 == p13 && p9 == p14) return []
	if (p5 == p8 && p6 == p9 && p10 == p13 && p11 == p14) return []
	if (p6 == p8 && p7 == p9 && p11 == p13 && p12 == p14) return []
	if (p7 == p8 && p8 == p9 && p12 == p13 && p13 == p14) return []
	return [ p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13,
		 p14 ]
}
//  0  1  2  3  4
//  5  6  7  8  9
// 10 11 12 13 14
// 15
function mapper15(data) {
	var p0 = data[0][0]
	var p1 = data[0][1]
	var p2 = data[0][2]
	var p3 = data[0][3]
	var p4 = data[0][4]
	var p5 = data[0][5]
	var p6 = data[0][6]
	var p7 = data[0][7]
	var p8 = data[0][8]
	var p9 = data[0][9]
	var p10 = data[0][10]
	var p11 = data[0][11]
	var p12 = data[0][12]
	var p13 = data[0][13]
	var p14 = data[0][14]
	var p15 = data[1]
	return [ p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13,
		 p14, p15 ]
}
//  0  1  2  3  4
//  5  6  7  8  9
// 10 11 12 13 14
// 15 16
function mapper16(data) {
	var p0 = data[0][0]
	var p1 = data[0][1]
	var p2 = data[0][2]
	var p3 = data[0][3]
	var p4 = data[0][4]
	var p5 = data[0][5]
	var p6 = data[0][6]
	var p7 = data[0][7]
	var p8 = data[0][8]
	var p9 = data[0][9]
	var p10 = data[0][10]
	var p11 = data[0][11]
	var p12 = data[0][12]
	var p13 = data[0][13]
	var p14 = data[0][14]
	var p15 = data[0][15]
	var p16 = data[1]
	if (p0 == p10 && p1 == p11 && p5 == p15 && p6 == p16) return []
	if (p1 == p10 && p2 == p11 && p6 == p15 && p7 == p16) return []
	if (p2 == p10 && p3 == p11 && p7 == p15 && p8 == p16) return []
	if (p3 == p10 && p4 == p11 && p8 == p15 && p9 == p16) return []
	if (p5 == p10 && p6 == p11 && p10 == p15 && p11 == p16) return []
	if (p6 == p10 && p7 == p11 && p11 == p15 && p12 == p16) return []
	if (p7 == p10 && p8 == p11 && p12 == p15 && p13 == p16) return []
	if (p8 == p10 && p9 == p11 && p13 == p15 && p14 == p16) return []
	return [ p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13,
		 p14, p15, p16 ]
}
//  0  1  2  3  4
//  5  6  7  8  9
// 10 11 12 13 14
// 15 16 17
function mapper17(data) {
	var p0 = data[0][0]
	var p1 = data[0][1]
	var p2 = data[0][2]
	var p3 = data[0][3]
	var p4 = data[0][4]
	var p5 = data[0][5]
	var p6 = data[0][6]
	var p7 = data[0][7]
	var p8 = data[0][8]
	var p9 = data[0][9]
	var p10 = data[0][10]
	var p11 = data[0][11]
	var p12 = data[0][12]
	var p13 = data[0][13]
	var p14 = data[0][14]
	var p15 = data[0][15]
	var p16 = data[0][16]
	var p17 = data[1]
	if (p0 == p11 && p1 == p12 && p5 == p16 && p6 == p17) return []
	if (p1 == p11 && p2 == p12 && p6 == p16 && p7 == p17) return []
	if (p2 == p11 && p3 == p12 && p7 == p16 && p8 == p17) return []
	if (p3 == p11 && p4 == p12 && p8 == p16 && p9 == p17) return []
	if (p5 == p11 && p6 == p12 && p10 == p16 && p11 == p17) return []
	if (p6 == p11 && p7 == p12 && p11 == p16 && p12 == p17) return []
	if (p7 == p11 && p8 == p12 && p12 == p16 && p13 == p17) return []
	if (p8 == p11 && p9 == p12 && p13 == p16 && p14 == p17) return []
	if (p10 == p11 && p11 == p12 && p15 == p16 && p16 == p17) return []
	return [ p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13,
		 p14, p15, p16, p17 ]
}
//  0  1  2  3  4
//  5  6  7  8  9
// 10 11 12 13 14
// 15 16 17 18
function mapper18(data) {
	var p0 = data[0][0]
	var p1 = data[0][1]
	var p2 = data[0][2]
	var p3 = data[0][3]
	var p4 = data[0][4]
	var p5 = data[0][5]
	var p6 = data[0][6]
	var p7 = data[0][7]
	var p8 = data[0][8]
	var p9 = data[0][9]
	var p10 = data[0][10]
	var p11 = data[0][11]
	var p12 = data[0][12]
	var p13 = data[0][13]
	var p14 = data[0][14]
	var p15 = data[0][15]
	var p16 = data[0][16]
	var p17 = data[0][17]
	var p18 = data[1]
	if (p0 == p12 && p1 == p13 && p5 == p17 && p6 == p18) return []
	if (p1 == p12 && p2 == p13 && p6 == p17 && p7 == p18) return []
	if (p2 == p12 && p3 == p13 && p7 == p17 && p8 == p18) return []
	if (p3 == p12 && p4 == p13 && p8 == p17 && p9 == p18) return []
	if (p5 == p12 && p6 == p13 && p10 == p17 && p11 == p18) return []
	if (p6 == p12 && p7 == p13 && p11 == p17 && p12 == p18) return []
	if (p7 == p12 && p8 == p13 && p12 == p17 && p13 == p18) return []
	if (p8 == p12 && p9 == p13 && p13 == p17 && p14 == p18) return []
	if (p10 == p12 && p11 == p13 && p15 == p17 && p16 == p18) return []
	if (p11 == p12 && p12 == p13 && p16 == p17 && p17 == p18) return []
	return [ p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13,
		 p14, p15, p16, p17, p18 ]
}
//  0  1  2  3  4
//  5  6  7  8  9
// 10 11 12 13 14
// 15 16 17 18 19
function mapper19(data) {
	var p0 = data[0][0]
	var p1 = data[0][1]
	var p2 = data[0][2]
	var p3 = data[0][3]
	var p4 = data[0][4]
	var p5 = data[0][5]
	var p6 = data[0][6]
	var p7 = data[0][7]
	var p8 = data[0][8]
	var p9 = data[0][9]
	var p10 = data[0][10]
	var p11 = data[0][11]
	var p12 = data[0][12]
	var p13 = data[0][13]
	var p14 = data[0][14]
	var p15 = data[0][15]
	var p16 = data[0][16]
	var p17 = data[0][17]
	var p18 = data[0][18]
	var p19 = data[1]
	if (p15 != p19) return []	// torus
	if (p0 == p13 && p1 == p14 && p5 == p18 && p6 == p19) return []
	if (p1 == p13 && p2 == p14 && p6 == p18 && p7 == p19) return []
	if (p2 == p13 && p3 == p14 && p7 == p18 && p8 == p19) return []
	if (p3 == p13 && p4 == p14 && p8 == p18 && p9 == p19) return []
	if (p5 == p13 && p6 == p14 && p10 == p18 && p11 == p19) return []
	if (p6 == p13 && p7 == p14 && p11 == p18 && p12 == p19) return []
	if (p7 == p13 && p8 == p14 && p12 == p18 && p13 == p19) return []
	if (p8 == p13 && p9 == p14 && p13 == p18 && p14 == p19) return []
	if (p10 == p13 && p11 == p14 && p15 == p18 && p16 == p19) return []
	if (p11 == p13 && p12 == p14 && p16 == p18 && p17 == p19) return []
	if (p12 == p13 && p13 == p14 && p17 == p18 && p18 == p19) return []
	return [ p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13,
		 p14, p15, p16, p17, p18, p19 ]
}
//  0  1  2  3  4
//  5  6  7  8  9
// 10 11 12 13 14
// 15 16 17 18 19
// 20
function mapper20(data) {
	var p0 = data[0][0]
	var p1 = data[0][1]
	var p2 = data[0][2]
	var p3 = data[0][3]
	var p4 = data[0][4]
	var p5 = data[0][5]
	var p6 = data[0][6]
	var p7 = data[0][7]
	var p8 = data[0][8]
	var p9 = data[0][9]
	var p10 = data[0][10]
	var p11 = data[0][11]
	var p12 = data[0][12]
	var p13 = data[0][13]
	var p14 = data[0][14]
	var p15 = data[0][15]
	var p16 = data[0][16]
	var p17 = data[0][17]
	var p18 = data[0][18]
	var p19 = data[0][19]
	var p20 = data[1]
	return [ p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13,
		 p14, p15, p16, p17, p18, p19, p20 ]
}
//  0  1  2  3  4
//  5  6  7  8  9
// 10 11 12 13 14
// 15 16 17 18 19
// 20 21
function mapper21(data) {
	var p0 = data[0][0]
	var p1 = data[0][1]
	var p2 = data[0][2]
	var p3 = data[0][3]
	var p4 = data[0][4]
	var p5 = data[0][5]
	var p6 = data[0][6]
	var p7 = data[0][7]
	var p8 = data[0][8]
	var p9 = data[0][9]
	var p10 = data[0][10]
	var p11 = data[0][11]
	var p12 = data[0][12]
	var p13 = data[0][13]
	var p14 = data[0][14]
	var p15 = data[0][15]
	var p16 = data[0][16]
	var p17 = data[0][17]
	var p18 = data[0][18]
	var p19 = data[0][19]
	var p20 = data[0][20]
	var p21 = data[1]
	if (p0 == p15 && p1 == p16 && p5 == p20 && p6 == p21) return []
	if (p1 == p15 && p2 == p16 && p6 == p20 && p7 == p21) return []
	if (p2 == p15 && p3 == p16 && p7 == p20 && p8 == p21) return []
	if (p3 == p15 && p4 == p16 && p8 == p20 && p9 == p21) return []
	if (p5 == p15 && p6 == p16 && p10 == p20 && p11 == p21) return []
	if (p6 == p15 && p7 == p16 && p11 == p20 && p12 == p21) return []
	if (p7 == p15 && p8 == p16 && p12 == p20 && p13 == p21) return []
	if (p8 == p15 && p9 == p16 && p13 == p20 && p14 == p21) return []
	if (p10 == p15 && p11 == p16 && p15 == p20 && p16 == p21) return []
	if (p11 == p15 && p12 == p16 && p16 == p20 && p17 == p21) return []
	if (p12 == p15 && p13 == p16 && p17 == p20 && p18 == p21) return []
	if (p13 == p15 && p14 == p16 && p18 == p20 && p19 == p21) return []
	return [ p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13,
		 p14, p15, p16, p17, p18, p19, p20, p21 ]
}
//  0  1  2  3  4
//  5  6  7  8  9
// 10 11 12 13 14
// 15 16 17 18 19
// 20 21 22
function mapper22(data) {
	var p0 = data[0][0]
	var p1 = data[0][1]
	var p2 = data[0][2]
	var p3 = data[0][3]
	var p4 = data[0][4]
	var p5 = data[0][5]
	var p6 = data[0][6]
	var p7 = data[0][7]
	var p8 = data[0][8]
	var p9 = data[0][9]
	var p10 = data[0][10]
	var p11 = data[0][11]
	var p12 = data[0][12]
	var p13 = data[0][13]
	var p14 = data[0][14]
	var p15 = data[0][15]
	var p16 = data[0][16]
	var p17 = data[0][17]
	var p18 = data[0][18]
	var p19 = data[0][19]
	var p20 = data[0][20]
	var p21 = data[0][21]
	var p22 = data[1]
	if (p0 == p16 && p1 == p17 && p5 == p21 && p6 == p22) return []
	if (p1 == p16 && p2 == p17 && p6 == p21 && p7 == p22) return []
	if (p2 == p16 && p3 == p17 && p7 == p21 && p8 == p22) return []
	if (p3 == p16 && p4 == p17 && p8 == p21 && p9 == p22) return []
	if (p5 == p16 && p6 == p17 && p10 == p21 && p11 == p22) return []
	if (p6 == p16 && p7 == p17 && p11 == p21 && p12 == p22) return []
	if (p7 == p16 && p8 == p17 && p12 == p21 && p13 == p22) return []
	if (p8 == p16 && p9 == p17 && p13 == p21 && p14 == p22) return []
	if (p10 == p16 && p11 == p17 && p15 == p21 && p16 == p22) return []
	if (p11 == p16 && p12 == p17 && p16 == p21 && p17 == p22) return []
	if (p12 == p16 && p13 == p17 && p17 == p21 && p18 == p22) return []
	if (p13 == p16 && p14 == p17 && p18 == p21 && p19 == p22) return []
	if (p15 == p16 && p16 == p17 && p20 == p21 && p21 == p22) return []
	return [ p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13,
		 p14, p15, p16, p17, p18, p19, p20, p21, p22 ]
}
//  0  1  2  3  4
//  5  6  7  8  9
// 10 11 12 13 14
// 15 16 17 18 19
// 20 21 22 23
function mapper23(data) {
	var p0 = data[0][0]
	var p1 = data[0][1]
	var p2 = data[0][2]
	var p3 = data[0][3]
	var p4 = data[0][4]
	var p5 = data[0][5]
	var p6 = data[0][6]
	var p7 = data[0][7]
	var p8 = data[0][8]
	var p9 = data[0][9]
	var p10 = data[0][10]
	var p11 = data[0][11]
	var p12 = data[0][12]
	var p13 = data[0][13]
	var p14 = data[0][14]
	var p15 = data[0][15]
	var p16 = data[0][16]
	var p17 = data[0][17]
	var p18 = data[0][18]
	var p19 = data[0][19]
	var p20 = data[0][20]
	var p21 = data[0][21]
	var p22 = data[0][22]
	var p23 = data[1]
	if (p0 == p17 && p1 == p18 && p5 == p22 && p6 == p23) return []
	if (p1 == p17 && p2 == p18 && p6 == p22 && p7 == p23) return []
	if (p2 == p17 && p3 == p18 && p7 == p22 && p8 == p23) return []
	if (p3 == p17 && p4 == p18 && p8 == p22 && p9 == p23) return []
	if (p5 == p17 && p6 == p18 && p10 == p22 && p11 == p23) return []
	if (p6 == p17 && p7 == p18 && p11 == p22 && p12 == p23) return []
	if (p7 == p17 && p8 == p18 && p12 == p22 && p13 == p23) return []
	if (p8 == p17 && p9 == p18 && p13 == p22 && p14 == p23) return []
	if (p10 == p17 && p11 == p18 && p15 == p22 && p16 == p23) return []
	if (p11 == p17 && p12 == p18 && p16 == p22 && p17 == p23) return []
	if (p12 == p17 && p13 == p18 && p17 == p22 && p18 == p23) return []
	if (p13 == p17 && p14 == p18 && p18 == p22 && p19 == p23) return []
	if (p15 == p17 && p16 == p18 && p20 == p22 && p21 == p23) return []
	if (p16 == p17 && p17 == p18 && p21 == p22 && p22 == p23) return []
	return [ p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13,
		 p14, p15, p16, p17, p18, p19, p20, p21, p22, p23 ]
}
//  0  1  2  3  4
//  5  6  7  8  9
// 10 11 12 13 14
// 15 16 17 18 19
// 20 21 22 23 24
function mapper24(data) {
	var p0 = data[0][0]
	var p1 = data[0][1]
	var p2 = data[0][2]
	var p3 = data[0][3]
	var p4 = data[0][4]
	var p5 = data[0][5]
	var p6 = data[0][6]
	var p7 = data[0][7]
	var p8 = data[0][8]
	var p9 = data[0][9]
	var p10 = data[0][10]
	var p11 = data[0][11]
	var p12 = data[0][12]
	var p13 = data[0][13]
	var p14 = data[0][14]
	var p15 = data[0][15]
	var p16 = data[0][16]
	var p17 = data[0][17]
	var p18 = data[0][18]
	var p19 = data[0][19]
	var p20 = data[0][20]
	var p21 = data[0][21]
	var p22 = data[0][22]
	var p23 = data[0][23]
	var p24 = data[1]
	if (p1 != p21 || p2 != p22 || p3 != p23) return []	// torus
	if (p0 == p18 && p1 == p19 && p5 == p23 && p6 == p24) return []
	if (p1 == p18 && p2 == p19 && p6 == p23 && p7 == p24) return []
	if (p2 == p18 && p3 == p19 && p7 == p23 && p8 == p24) return []
	if (p3 == p18 && p4 == p19 && p8 == p23 && p9 == p24) return []
	if (p5 == p18 && p6 == p19 && p10 == p23 && p11 == p24) return []
	if (p6 == p18 && p7 == p19 && p11 == p23 && p12 == p24) return []
	if (p7 == p18 && p8 == p19 && p12 == p23 && p13 == p24) return []
	if (p8 == p18 && p9 == p19 && p13 == p23 && p14 == p24) return []
	if (p10 == p18 && p11 == p19 && p15 == p23 && p16 == p24) return []
	if (p11 == p18 && p12 == p19 && p16 == p23 && p17 == p24) return []
	if (p12 == p18 && p13 == p19 && p17 == p23 && p18 == p24) return []
	if (p13 == p18 && p14 == p19 && p18 == p23 && p19 == p24) return []
	if (p15 == p18 && p16 == p19 && p20 == p23 && p21 == p24) return []
	if (p16 == p18 && p17 == p19 && p21 == p23 && p22 == p24) return []
	if (p17 == p18 && p18 == p19 && p22 == p23 && p23 == p24) return []
	return [ p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13,
		 p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24 ]
}
function stripsym(data) {
	var i
	var j
	for (i = 0; i < data.length; i++) {
		for (j = i + 1; j < data.length; j++) {
			if (data[i][1] == data[j][21] &&
				data[i][2] == data[j][22] &&
				data[i][3] == data[j][23] &&
				data[i][5] == data[j][15] &&
				data[i][6] == data[j][16] &&
				data[i][7] == data[j][17] &&
				data[i][8] == data[j][18] &&
				data[i][9] == data[j][19] &&
				data[i][11] == data[j][11] &&
				data[i][10] == data[j][10] &&
				data[i][12] == data[j][12] &&
				data[i][13] == data[j][13] &&
				data[i][14] == data[j][14] &&
				data[i][15] == data[j][5] &&
				data[i][16] == data[j][6] &&
				data[i][17] == data[j][7] &&
				data[i][18] == data[j][8] &&
				data[i][19] == data[j][9] &&
				data[i][21] == data[j][1] &&
				data[i][22] == data[j][2] &&
				data[i][23] == data[j][3])
			    		data[i] = []
			else if (data[i][5] == data[j][9] &&
				data[i][10] == data[j][14] &&
				data[i][15] == data[j][19] &&
				data[i][1] == data[j][3] &&
				data[i][6] == data[j][8] &&
				data[i][11] == data[j][13] &&
				data[i][16] == data[j][18] &&
				data[i][21] == data[j][23] &&
				data[i][2] == data[j][2] &&
				data[i][7] == data[j][7] &&
				data[i][12] == data[j][12] &&
				data[i][17] == data[j][17] &&
				data[i][22] == data[j][22] &&
				data[i][3] == data[j][1] &&
				data[i][8] == data[j][6] &&
				data[i][13] == data[j][11] &&
				data[i][18] == data[j][16] &&
				data[i][23] == data[j][21] &&
				data[i][9] == data[j][5] &&
				data[i][14] == data[j][10] &&
				data[i][19] == data[j][15])
			    		data[i] = []
			else if (data[i][1] == data[j][5] &&
				data[i][2] == data[j][10] &&
				data[i][3] == data[j][15] &&
				data[i][6] == data[j][6] &&
				data[i][7] == data[j][11] &&
				data[i][8] == data[j][16] &&
				data[i][9] == data[j][21] &&
				data[i][12] == data[j][12] &&
				data[i][13] == data[j][17] &&
				data[i][14] == data[j][22] &&
				data[i][18] == data[j][18] &&
				data[i][19] == data[j][23] &&
				data[j][1] == data[i][5] &&
				data[j][2] == data[i][10] &&
				data[j][3] == data[i][15] &&
				data[j][6] == data[i][6] &&
				data[j][7] == data[i][11] &&
				data[j][8] == data[i][16] &&
				data[j][9] == data[i][21] &&
				data[j][12] == data[i][12] &&
				data[j][13] == data[i][17] &&
				data[j][14] == data[i][22] &&
				data[j][18] == data[i][18] &&
				data[j][19] == data[i][23])
			    		data[i] = []
		}
	}
	return data
}
da0.cartesian(da1).
	cartesian(da2).map(mapper2).
	cartesian(da3).map(mapper3).
	cartesian(da4).map(mapper4).
	cartesian(da5).map(mapper5).
	cartesian(da6).map(mapper6).
	cartesian(da7).map(mapper7).subtract(das).
	cartesian(da8).map(mapper8).subtract(das).
	cartesian(da9).map(mapper9).subtract(das).
	cartesian(da10).map(mapper10).subtract(das).
	cartesian(da11).map(mapper11).subtract(das).
	cartesian(da12).map(mapper12).subtract(das).
	cartesian(da13).map(mapper13).subtract(das).
	cartesian(da14).map(mapper14).subtract(das).
	cartesian(da15).map(mapper15).subtract(das).
	cartesian(da16).map(mapper16).subtract(das).
	cartesian(da17).map(mapper17).subtract(das).
	cartesian(da18).map(mapper18).subtract(das).
	cartesian(da19).map(mapper19).subtract(das).
	cartesian(da20).map(mapper20).subtract(das).
	cartesian(da21).map(mapper21).subtract(das).
	cartesian(da22).map(mapper22).subtract(das).
	cartesian(da23).map(mapper23).subtract(das).
	cartesian(da24).map(mapper24).subtract(das).
	collect().toArray().then(
		function(res) {
			res = stripsym(res).filter(e => e.length)
			console.timeEnd('dedor')
			console.log(res)
			sc.end()
		}
	)
