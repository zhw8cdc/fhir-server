/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
VisionPrescription.LensSpecification
    An authorization for the provision of glasses and/or contact lenses to a
    patient.
*/
class VisionPrescriptionLensSpecification extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {CodeableConcept} product,
     * @param {code} eye,
     * @param {decimal|undefined} [sphere],
     * @param {decimal|undefined} [cylinder],
     * @param {Int|undefined} [axis],
     * @param {VisionPrescriptionPrism[]|undefined} [prism],
     * @param {decimal|undefined} [add],
     * @param {decimal|undefined} [power],
     * @param {decimal|undefined} [backCurve],
     * @param {decimal|undefined} [diameter],
     * @param {Quantity|undefined} [duration],
     * @param {String|undefined} [color],
     * @param {String|undefined} [brand],
     * @param {Annotation[]|undefined} [note],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            product,
            eye,
            sphere,
            cylinder,
            axis,
            prism,
            add,
            power,
            backCurve,
            diameter,
            duration,
            color,
            brand,
            note,
        }
    ) {
        super({});

        // ---- Define getters and setters as enumerable ---

        /**
         * @description None
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'id', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.id,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.id = valueProvided;
            }
        });

        /**
         * @description May be used to represent additional information that is not part of the basic
    definition of the element. To make the use of extensions safe and manageable,
    there is a strict set of governance  applied to the definition and use of
    extensions. Though any implementer can define an extension, there is a set of
    requirements that SHALL be met as part of the definition of the extension.
         * @property {Extension[]|undefined}
        */
        Object.defineProperty(this, 'extension', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.extension,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Extension = require('../extensions/extension.js');
                this.__data.extension = Array.isArray(valueProvided) ? valueProvided.map(v => new Extension(v)) : [new Extension(valueProvided)];
            }
        });

        /**
         * @description May be used to represent additional information that is not part of the basic
    definition of the element and that modifies the understanding of the element
    in which it is contained and/or the understanding of the containing element's
    descendants. Usually modifier elements provide negation or qualification. To
    make the use of extensions safe and manageable, there is a strict set of
    governance applied to the definition and use of extensions. Though any
    implementer can define an extension, there is a set of requirements that SHALL
    be met as part of the definition of the extension. Applications processing a
    resource are required to check for modifier extensions.

    Modifier extensions SHALL NOT change the meaning of any elements on Resource
    or DomainResource (including cannot change the meaning of modifierExtension
    itself).
         * @property {Extension[]|undefined}
        */
        Object.defineProperty(this, 'modifierExtension', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.modifierExtension,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Extension = require('../extensions/extension.js');
                this.__data.modifierExtension = Array.isArray(valueProvided) ? valueProvided.map(v => new Extension(v)) : [new Extension(valueProvided)];
            }
        });

        /**
         * @description Identifies the type of vision correction product which is required for the
    patient.
         * @property {CodeableConcept}
        */
        Object.defineProperty(this, 'product', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.product,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.product = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description The eye for which the lens specification applies.
         * @property {code}
        */
        Object.defineProperty(this, 'eye', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.eye,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.eye = valueProvided;
            }
        });

        /**
         * @description Lens power measured in dioptres (0.25 units).
         * @property {decimal|undefined}
        */
        Object.defineProperty(this, 'sphere', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.sphere,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.sphere = valueProvided;
            }
        });

        /**
         * @description Power adjustment for astigmatism measured in dioptres (0.25 units).
         * @property {decimal|undefined}
        */
        Object.defineProperty(this, 'cylinder', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.cylinder,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.cylinder = valueProvided;
            }
        });

        /**
         * @description Adjustment for astigmatism measured in integer degrees.
         * @property {Int|undefined}
        */
        Object.defineProperty(this, 'axis', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.axis,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.axis = valueProvided;
            }
        });

        /**
         * @description Allows for adjustment on two axis.
         * @property {VisionPrescriptionPrism[]|undefined}
        */
        Object.defineProperty(this, 'prism', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.prism,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let VisionPrescriptionPrism = require('../backbone_elements/visionPrescriptionPrism.js');
                this.__data.prism = Array.isArray(valueProvided) ? valueProvided.map(v => new VisionPrescriptionPrism(v)) : [new VisionPrescriptionPrism(valueProvided)];
            }
        });

        /**
         * @description Power adjustment for multifocal lenses measured in dioptres (0.25 units).
         * @property {decimal|undefined}
        */
        Object.defineProperty(this, 'add', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.add,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.add = valueProvided;
            }
        });

        /**
         * @description Contact lens power measured in dioptres (0.25 units).
         * @property {decimal|undefined}
        */
        Object.defineProperty(this, 'power', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.power,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.power = valueProvided;
            }
        });

        /**
         * @description Back curvature measured in millimetres.
         * @property {decimal|undefined}
        */
        Object.defineProperty(this, 'backCurve', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.backCurve,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.backCurve = valueProvided;
            }
        });

        /**
         * @description Contact lens diameter measured in millimetres.
         * @property {decimal|undefined}
        */
        Object.defineProperty(this, 'diameter', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.diameter,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.diameter = valueProvided;
            }
        });

        /**
         * @description The recommended maximum wear period for the lens.
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'duration', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.duration,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Quantity = require('../complex_types/quantity.js');
                this.__data.duration = new Quantity(valueProvided);
            }
        });

        /**
         * @description Special color or pattern.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'color', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.color,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.color = valueProvided;
            }
        });

        /**
         * @description Brand recommendations or restrictions.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'brand', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.brand,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.brand = valueProvided;
            }
        });

        /**
         * @description Notes for special requirements such as coatings and lens materials.
         * @property {Annotation[]|undefined}
        */
        Object.defineProperty(this, 'note', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.note,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Annotation = require('../complex_types/annotation.js');
                this.__data.note = Array.isArray(valueProvided) ? valueProvided.map(v => new Annotation(v)) : [new Annotation(valueProvided)];
            }
        });


        /**
         * @description Specific instances of data or objects that have been accessed.
         * @property {AuditEventEntity[]|undefined}
         */
        Object.defineProperty(this, '_access', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data._access,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null) {
                    return;
                }
                this.__data._access = valueProvided;
            }
        });

        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            product,
            eye,
            sphere,
            cylinder,
            axis,
            prism,
            add,
            power,
            backCurve,
            diameter,
            duration,
            color,
            brand,
            note,
        });

    }



    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSON() {
        const {removeNull} = require('../../../../utils/nullRemover');

        return removeNull({
            id: this.id,
            extension: this.extension && this.extension.map(v => v.toJSON()),
            modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
            product: this.product && this.product.toJSON(),
            eye: this.eye,
            sphere: this.sphere,
            cylinder: this.cylinder,
            axis: this.axis,
            prism: this.prism && this.prism.map(v => v.toJSON()),
            add: this.add,
            power: this.power,
            backCurve: this.backCurve,
            diameter: this.diameter,
            duration: this.duration && this.duration.toJSON(),
            color: this.color,
            brand: this.brand,
            note: this.note && this.note.map(v => v.toJSON()),
        });
    }

    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSONInternal() {
        const {removeNull} = require('../../../../utils/nullRemover');
        const json = this.toJSON();

        if (this._access) {
            json._access = this._access;
        }
        return removeNull(json);
    }
}

module.exports = VisionPrescriptionLensSpecification;
