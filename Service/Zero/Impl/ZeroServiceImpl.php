<?php
namespace Zero\Service\Zero\Impl;

use Topxia\Service\Common\BaseService;
use Zero\Service\Zero\ZeroService;

class ZeroServiceImpl extends BaseService implements ZeroService
{
    protected function getZeroDao()
    {
        return $this->createDao('Zero:Zero.ZeroDao');
    }
}