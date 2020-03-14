var QRCode = require('qrcode');
var qrcode = require('qrcode-terminal');

const generateqrcode = async (array, name) => {
  var opts = {
    quality: 0.3,
    color: {
      dark: '#000000',  // Blue dots
      light: '#0000' // Transparent background
    }
  }
  try {
    console.log("ttttt");
    var array = [];
    array.push("AG006475 - MENAKA NISHANTHI LIYANAGEDARA - Advisor - CENTRAL ZONE");
array.push("AG000820 - KARANDHAGODA D.S. - Advisor - NORTH CENTRAL 1 ZONE");
array.push("AG001257 - FERNANDO P.M.M. - Advisor - NORTH WESTERN 1 ZONE");
array.push("AG008880 - IMIHAMI MUDIYANSELAGE DHANAPALA - Advisor - NORTH WESTERN 1 ZONE");
array.push("AG000980 - RANDENI R.A.V.A. - Advisor - NORTH WESTERN 1 ZONE");
array.push("AG000441 - HERATH H.M.N.K. - Advisor - NORTH WESTERN 2 ZONE");
array.push("AG009500 - PALLEGAMA MUDIYANSELAGE DINUSHA PUBUDU PALLEGAMA - Advisor - NORTH WESTERN 2 ZONE");
array.push("AG001871 - SUDHARSHAN M. - Advisor - NORTHERN  ZONE ");
array.push("AG003098 - SUGANTHAN K. - Advisor - NORTHERN  ZONE ");
array.push("AG000327 - SAMAN W.S.C. - Advisor - SOUTHERN 2 ZONE");
array.push("AG005391 - DAMAYANTHI K.V.C. - Advisor - SOUTHERN 2 ZONE");
array.push("AG009081 - WASALA ARACHCHILAGE DON KAVIDU RASHMIKA - Advisor - UVA ZONE");
array.push("AG001241 - GUNATHUNGA K.W.S.P. - Advisor - UVA ZONE");
array.push("AG001256 - YASAWATHI D.M. - Advisor - UVA ZONE");
array.push("AG001626 - WEERASEKARA R.A.D.I.R. - Advisor - WESTERN 1 ZONE");
array.push("AG009657 - SENARATH ARACHCHIGE PATHMINI - Advisor - WESTERN 4 ZONE");
array.push("AG004999 - JAYALAKSHANA T. - Advisor - WESTERN 5 ZONE");
array.push("AG009705 - IDURAGE AMILA INDIKA KUMARASINGHE - Advisor - WESTERN 5 ZONE");
array.push("AG002651 - PRABATH K.C. - Advisor - WESTERN 5 ZONE");
array.push("AG005635 - MRS THUSHANI R P L S - Advisor - WESTERN 5 ZONE");
array.push("AG002896 - JAGODA P.S.M. - Business Development Officer - NORTH CENTRAL 1 ZONE");
array.push("AG000608 - LAKMAL D.A. - Business Development Officer - NORTH CENTRAL 1 ZONE");
array.push("AG002312 - SANKALPA R.M.V. - Business Development Officer - NORTH WESTERN 1 ZONE");
array.push("AG003359 - FERNANDO J.S.S. - Business Development Officer - WESTERN 1 ZONE");
array.push("AG001768 - KUMARA D.G.C. - Business Development Officer - WESTERN 4 ZONE");
array.push("AG001281 - WIJESURIYA R.M.K.S. - Business Development Officer - WESTERN 5 ZONE");
array.push("AG009155 - HARIEMILDAN USHANTHINI - Manager Business Development - EASTERN ZONE");
array.push("AG002978 - KUMARA W.G.C. - Regional Sales Manager - NORTH CENTRAL 1 ZONE");
array.push("AG004878 - SAHABANDU D.N. - Regional Sales Manager - WESTERN 5 ZONE");
array.push("AG000041 - M T Premadasha");
array.push("AG001094 - SAMARAKOON S.M.N. .");
array.push("AG000622 - SENEVIRATHNA T.M.A.R. .");
array.push("AG000222 - THENNAKOON T.M.K.N. .");
array.push("AG000283 - NANAYAKKARA L.D.C.A.M. .");
array.push("AG000552 - LIYANAGE L.N.R. .");



    console.log("ddd2");
    for (let i = 0; i < array.length; i++) {
      var name = array[i].split(" - ", 1);

      QRCode.toFile('assets/' + name + '.png', array[i], opts, function (err) {
        if (err) throw err
        console.log('done')
      });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { generateqrcode };