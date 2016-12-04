<?php

namespace Zero\ZeroBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        var_dump(123555);
        return $this->render('ZeroBundle:Default:index.html.twig', array('name' => $name));
    }
}
