<style scoped lang="less">
    @import "../styles/index.less";
</style>
<style>
    .index-version.ivu-badge-count{
        box-shadow: none;
        right: 0;
        top: -3px;
        color: #f50;
        background: transparent;
    }
</style>
<template>
    <div class="index">
        <div class="bg"><span></span></div>
        <Row type="flex" justify="center" align="middle" style="position: relative;z-index: 3">
            <i-col span="24">
                <h1>
                    <img src="../images/logo.png" class="img-logo">
                    <Badge count="1.0.1" class="index-version">
                        <img src="../images/name.png" class="img-name">
                    </Badge>
                </h1>
                <h2>一套基于 Vue.js 的高质量 UI 组件库</h2>
                <div class="list">
                    <a v-link="{path: '/docs/guide/introduce'}">指南</a>
                    <a v-link="{path: '/docs/guide/install'}">组件</a>
                    <a v-link="{path: '/docs/practice/case'}">实践</a>
                    <a v-link="{path: '/cli'}">脚手架</a>
                    <a v-link="{path: '/overview'}">概览</a>
                    <a href="https://github.com/iview/iview" target="_blank">
                        <Icon type="social-github"></Icon>
                        GitHub
                    </a>
                </div>
            </i-col>
        </Row>
    </div>
    <div id="indexLizi"></div>
</template>
<script>
    import THREE from '../libs/three/three';

    export default {
        data () {
            return {

            }
        },
        methods: {
            liziInit () {
                var SCREEN_WIDTH = window.innerWidth;
                var SCREEN_HEIGHT = window.innerHeight;

                var SEPARATION = 90;
                var AMOUNTX = 50;
                var AMOUNTY = 50;

                var container;

                var particles, particle;
                var count;

                var camera;
                var scene;
                var renderer;

                var mouseX = 0;
                var mouseY = 0;

                var windowHalfX = window.innerWidth / 2;
                var windowHalfY = window.innerHeight / 2;

                init();
                this.interval = setInterval(loop, 1000 / 60);

                function init() {

                    container = document.createElement( 'div' );
                    container.style.position = 'relative';
                    container.style.top = '200px';
                    document.getElementById('indexLizi').appendChild( container );

                    camera = new THREE.Camera( 75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000 );
                    camera.position.z = 1000;

                    scene = new THREE.Scene();

                    renderer = new THREE.CanvasRenderer();
                    renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );

                    particles = new Array();

                    var i = 0;
                    var material = new THREE.ParticleCircleMaterial( 0x097bdb, 1 );

                    for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

                        for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

                            particle = particles[ i ++ ] = new THREE.Particle( material );
                            particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
                            particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 );
                            scene.add( particle );
                        }
                    }

                    count = 0;

                    container.appendChild( renderer.domElement );

                    document.addEventListener( 'mousemove', onDocumentMouseMove, false );
                    document.addEventListener( 'touchstart', onDocumentTouchStart, false );
                    document.addEventListener( 'touchmove', onDocumentTouchMove, false );
                }

                function onDocumentMouseMove( event ) {

                    mouseX = event.clientX - windowHalfX;
                    mouseY = event.clientY - windowHalfY;

                }

                function onDocumentTouchStart( event ) {

                    if ( event.touches.length == 1 ) {

                        event.preventDefault();

                        mouseX = event.touches[ 0 ].pageX - windowHalfX;
                        mouseY = event.touches[ 0 ].pageY - windowHalfY;

                    }
                }

                function onDocumentTouchMove( event ) {

                    if ( event.touches.length == 1 ) {

                        event.preventDefault();

                        mouseX = event.touches[ 0 ].pageX - windowHalfX;
                        mouseY = event.touches[ 0 ].pageY - windowHalfY;

                    }
                }

                function loop() {
                    camera.position.x += ( mouseX - camera.position.x ) * .05;
//                    camera.position.y += ( - mouseY - camera.position.y ) * .05;
                    camera.position.y = 364;

                    var i = 0;

                    for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

                        for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

                            particle = particles[ i++ ];
                            particle.position.y = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) + ( Math.sin( ( iy + count ) * 0.5 ) * 50 );
                            particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 2 + ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 2;

                        }
                    }

                    renderer.render( scene, camera );

                    count += 0.1;
                }
            }
        },
        ready () {
            this.liziInit();
        },
        beforeDestroy () {
            if (this.interval) clearInterval(this.interval);
        }
    }
</script>
