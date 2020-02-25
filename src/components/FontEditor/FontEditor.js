import EventBus from '../../utils/EventBus';
import $ from 'jquery';

export default {
    name: 'FontEditor',
    props: {
    },
    created() {
        EventBus.$on('FONT_CHANGED', function (payload) {
            $('#font-editor').css('font-family', payload);
        });
        EventBus.$on('FONT_VARIATION_SETTINGS_CHANGED', function (payload) {
            var settings = '';
            for (const varName in payload)
                settings += '"' + varName + '" ' + payload[varName] + ", ";
            settings = settings.slice(0, -2);
            $('#font-editor').css({ 'font-variation-settings': settings });
        });
        EventBus.$on('FONT_SIZE_CHANGED', function (payload) {
            $('p').css({ 'font-size': payload + 'px' });
        });
    }
}