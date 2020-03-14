require( "./model" );
const controller = require( "./controller" );
const express = require( "express" );
const router = express.Router( );

router.get( "/event/id=:eventid", controller.detail );
router.get("/generate/grcodes", controller.generate )

module.exports = router;

// const router = express.Router( );
// router.post( "/", controller.create );
// router.put( "/:id", controller.update );
// router.delete( "/:id", controller.delete );
// router.get( "/", controller.list );