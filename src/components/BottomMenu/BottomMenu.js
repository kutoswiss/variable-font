import EventBus from '../../utils/EventBus';
import $ from 'jquery';
import anybody from '../../assets/fonts/anybody.ttf';
import imbue from '../../assets/fonts/imbue.ttf';
import minipax from '../../assets/fonts/minipax.ttf';
import urbanist from '../../assets/fonts/urbanist.ttf';

var opentype = require('opentype.js');
var type = {
    'Anybody': anybody,
    'Imbue': imbue,
    'Minipax': minipax,
    'Urbanist': urbanist
};

export default {
    name: 'BottomMenu',
    data: function () {
        return {
            fontsize: 100,
            axes: [],
            fontSelected: '',
            fontOptions: [],
            instanceSelected: '',
            instanceOptions: []
        };
    },
    methods: {
        fontChanged: function (event) {
            var font = event.target.value;
            EventBus.$emit('FONT_CHANGED', font);
            this.loadAxes(font);
            this.loadInstances(font);
        },
        axisChanged: function () {
            var coordinates = {};
            this.axes.forEach(function (item) {
                coordinates[item.tag] = parseInt(item.value);
            });
            EventBus.$emit('FONT_VARIATION_SETTINGS_CHANGED', coordinates);
        },
        sizeChanged: function () {
            EventBus.$emit('FONT_SIZE_CHANGED', this.fontsize);
        },
        instanceChanged: function () {
            var self = this;
            var instance = undefined;
            this.instanceOptions.forEach(function (item) {
                if (item.name == self.instanceSelected)
                    instance = item;
            });
            if (instance != undefined) {
                EventBus.$emit('FONT_VARIATION_SETTINGS_CHANGED', instance.coordinates);
                for (var coord in instance.coordinates) {
                    this.axes.forEach(function (item) {
                        if (item.tag == coord)
                            item.value = instance.coordinates[coord];
                    });
                }
            }
        },
        loadAxes: function (fontName) {
            var self = this;
            self.axes = [];
            self.instanceOptions = [];
            opentype.load(type[fontName], function (err, font) {
                var axes = font.tables.fvar.axes;
                axes.forEach(function (item, index) {
                    self.axes.push({ key: index, tag: item.tag, name: item.name.en, minValue: item.minValue, maxValue: item.maxValue, defaultValue: item.defaultValue, value: item.defaultValue });
                });
            });
        },
        loadInstances: function (fontName) {
            var self = this;
            self.instanceOptions = [];
            opentype.load(type[fontName], function (err, font) {
                var instances = font.tables.fvar.instances;
                instances.forEach(function (item) {
                    self.instanceOptions.push({ key: item.name.en, name: item.name.en, coordinates: item.coordinates });
                });
            });
            self.instanceSelected = 'Regular';
        }
    },
    mounted() {
        var font = $('#font-list').val();
        this.loadAxes(font);
        this.loadInstances(font);
        console.log(this.axes);
    }
}