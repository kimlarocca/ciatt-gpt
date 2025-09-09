import Aura from '@primeuix/themes/aura'
// link to Aura tokens to reference
//https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/aura/
//https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/aura/base/index.ts

import {
    definePreset
}
from "@primeuix/themes"

const MyPreset = definePreset( Aura, {
    primitive: {},
    semantic: {
        primary: {
            50: "{sky.50}",
            100: "{sky.100}",
            200: "{sky.200}",
            300: "{sky.300}",
            400: "{sky.400}",
            500: "{sky.500}",
            600: "{sky.600}",
            700: "{sky.700}",
            800: "{sky.800}",
            900: "{sky.900}",
            950: "{sky.950}",
        },
        colorScheme: {
            // light: {
            //     text: {
            //         color: "{surface.950}",
            //     }
            // },
            // dark: {
            //     text: {
            //         color: "{surface.0}",
            //     }
            // }
        }
    },
    components: {},
} )

export default MyPreset