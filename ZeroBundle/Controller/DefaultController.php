<?php

namespace Zero\ZeroBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('ZeroBundle:Default:index.html.twig', array('name' => $name));
    }
}
