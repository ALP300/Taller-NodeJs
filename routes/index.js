import {Router} from 'express'
const router= Router()

router.get('/', (req, res) => res.render('index',{title:'Mi primera web con Node'}))
router.get('/about', (req, res) => res.render('about',{title2:'Sobre Nosotros'}))
router.get('/contact', (req, res) => res.render('contact',{title3:'Contáctanos'}))

export default router