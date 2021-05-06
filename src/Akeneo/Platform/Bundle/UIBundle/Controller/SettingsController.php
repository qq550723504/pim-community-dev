<?php

declare(strict_types=1);

namespace Akeneo\Platform\Bundle\UIBundle\Controller;

use Akeneo\Platform\Bundle\UIBundle\Query\CountSettingsEntitiesQueryInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * @copyright 2021 Akeneo SAS (http://www.akeneo.com)
 * @license   http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */
final class SettingsController
{
    private CountSettingsEntitiesQueryInterface $countSettingsEntitiesQuery;

    public function __construct(CountSettingsEntitiesQueryInterface $countSettingsEntitiesQuery)
    {
        $this->countSettingsEntitiesQuery = $countSettingsEntitiesQuery;
    }

    public function countEntitiesAction(): JsonResponse
    {
        $entities = $this->countSettingsEntitiesQuery->execute();

        return new JsonResponse($entities);
    }
}
