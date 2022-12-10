/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
RequestGroup.Action
    A group of related requests that can be used to capture intended activities
    that have inter-dependencies such as "give this medication after that one".
*/
class RequestGroupAction extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {String|undefined} [prefix],
     * @param {String|undefined} [title],
     * @param {String|undefined} [description],
     * @param {String|undefined} [textEquivalent],
     * @param {code|undefined} [priority],
     * @param {CodeableConcept[]|undefined} [code],
     * @param {RelatedArtifact[]|undefined} [documentation],
     * @param {RequestGroupCondition[]|undefined} [condition],
     * @param {RequestGroupRelatedAction[]|undefined} [relatedAction],
     * @param {dateTime|undefined} [timingDateTime],
     * @param {Quantity|undefined} [timingAge],
     * @param {Period|undefined} [timingPeriod],
     * @param {Quantity|undefined} [timingDuration],
     * @param {Range|undefined} [timingRange],
     * @param {Timing|undefined} [timingTiming],
     * @param {Reference[]|undefined} [participant],
     * @param {CodeableConcept|undefined} [type],
     * @param {code|undefined} [groupingBehavior],
     * @param {code|undefined} [selectionBehavior],
     * @param {code|undefined} [requiredBehavior],
     * @param {code|undefined} [precheckBehavior],
     * @param {code|undefined} [cardinalityBehavior],
     * @param {Reference|undefined} [resource],
     * @param {RequestGroupAction[]|undefined} [action],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            prefix,
            title,
            description,
            textEquivalent,
            priority,
            code,
            documentation,
            condition,
            relatedAction,
            timingDateTime,
            timingAge,
            timingPeriod,
            timingDuration,
            timingRange,
            timingTiming,
            participant,
            type,
            groupingBehavior,
            selectionBehavior,
            requiredBehavior,
            precheckBehavior,
            cardinalityBehavior,
            resource,
            action,
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
                    this.__data.id = undefined;
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
                    this.__data.extension = undefined;
                    return;
                }
                const Extension = require('../complex_types/extension.js');
                this.__data.extension = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Extension(v)) : [new Extension(valueProvided)];
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
                    this.__data.modifierExtension = undefined;
                    return;
                }
                const Extension = require('../complex_types/extension.js');
                this.__data.modifierExtension = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Extension(v)) : [new Extension(valueProvided)];
            }
        });

        /**
         * @description A user-visible prefix for the action.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'prefix', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.prefix,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.prefix = undefined;
                    return;
                }
                this.__data.prefix = valueProvided;
            }
        });

        /**
         * @description The title of the action displayed to a user.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'title', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.title,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.title = undefined;
                    return;
                }
                this.__data.title = valueProvided;
            }
        });

        /**
         * @description A short description of the action used to provide a summary to display to the
    user.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'description', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.description,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.description = undefined;
                    return;
                }
                this.__data.description = valueProvided;
            }
        });

        /**
         * @description A text equivalent of the action to be performed. This provides a human-
    interpretable description of the action when the definition is consumed by a
    system that might not be capable of interpreting it dynamically.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'textEquivalent', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.textEquivalent,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.textEquivalent = undefined;
                    return;
                }
                this.__data.textEquivalent = valueProvided;
            }
        });

        /**
         * @description Indicates how quickly the action should be addressed with respect to other
    actions.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'priority', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.priority,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.priority = undefined;
                    return;
                }
                this.__data.priority = valueProvided;
            }
        });

        /**
         * @description A code that provides meaning for the action or action group. For example, a
    section may have a LOINC code for a section of a documentation template.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'code', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.code,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.code = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.code = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description Didactic or other informational resources associated with the action that can
    be provided to the CDS recipient. Information resources can include inline
    text commentary and links to web resources.
         * @property {RelatedArtifact[]|undefined}
        */
        Object.defineProperty(this, 'documentation', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.documentation,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.documentation = undefined;
                    return;
                }
                const RelatedArtifact = require('../complex_types/relatedArtifact.js');
                this.__data.documentation = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new RelatedArtifact(v)) : [new RelatedArtifact(valueProvided)];
            }
        });

        /**
         * @description An expression that describes applicability criteria, or start/stop conditions
    for the action.
         * @property {RequestGroupCondition[]|undefined}
        */
        Object.defineProperty(this, 'condition', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.condition,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.condition = undefined;
                    return;
                }
                const RequestGroupCondition = require('../backbone_elements/requestGroupCondition.js');
                this.__data.condition = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new RequestGroupCondition(v)) : [new RequestGroupCondition(valueProvided)];
            }
        });

        /**
         * @description A relationship to another action such as "before" or "30-60 minutes after
    start of".
         * @property {RequestGroupRelatedAction[]|undefined}
        */
        Object.defineProperty(this, 'relatedAction', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.relatedAction,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.relatedAction = undefined;
                    return;
                }
                const RequestGroupRelatedAction = require('../backbone_elements/requestGroupRelatedAction.js');
                this.__data.relatedAction = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new RequestGroupRelatedAction(v)) : [new RequestGroupRelatedAction(valueProvided)];
            }
        });

        /**
         * @description None
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'timingDateTime', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.timingDateTime,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.timingDateTime = undefined;
                    return;
                }
                this.__data.timingDateTime = valueProvided;
            }
        });

        /**
         * @description None
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'timingAge', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.timingAge,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.timingAge = undefined;
                    return;
                }
                const Quantity = require('../complex_types/quantity.js');
                this.__data.timingAge = new Quantity(valueProvided);
            }
        });

        /**
         * @description None
         * @property {Period|undefined}
        */
        Object.defineProperty(this, 'timingPeriod', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.timingPeriod,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.timingPeriod = undefined;
                    return;
                }
                const Period = require('../complex_types/period.js');
                this.__data.timingPeriod = new Period(valueProvided);
            }
        });

        /**
         * @description None
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'timingDuration', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.timingDuration,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.timingDuration = undefined;
                    return;
                }
                const Quantity = require('../complex_types/quantity.js');
                this.__data.timingDuration = new Quantity(valueProvided);
            }
        });

        /**
         * @description None
         * @property {Range|undefined}
        */
        Object.defineProperty(this, 'timingRange', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.timingRange,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.timingRange = undefined;
                    return;
                }
                const Range = require('../complex_types/range.js');
                this.__data.timingRange = new Range(valueProvided);
            }
        });

        /**
         * @description None
         * @property {Timing|undefined}
        */
        Object.defineProperty(this, 'timingTiming', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.timingTiming,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.timingTiming = undefined;
                    return;
                }
                const Timing = require('../backbone_elements/timing.js');
                this.__data.timingTiming = new Timing(valueProvided);
            }
        });

        /**
         * @description The participant that should perform or be responsible for this action.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'participant', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.participant,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.participant = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.participant = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description The type of action to perform (create, update, remove).
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'type', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.type,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.type = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.type = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description Defines the grouping behavior for the action and its children.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'groupingBehavior', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.groupingBehavior,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.groupingBehavior = undefined;
                    return;
                }
                this.__data.groupingBehavior = valueProvided;
            }
        });

        /**
         * @description Defines the selection behavior for the action and its children.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'selectionBehavior', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.selectionBehavior,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.selectionBehavior = undefined;
                    return;
                }
                this.__data.selectionBehavior = valueProvided;
            }
        });

        /**
         * @description Defines expectations around whether an action is required.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'requiredBehavior', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.requiredBehavior,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.requiredBehavior = undefined;
                    return;
                }
                this.__data.requiredBehavior = valueProvided;
            }
        });

        /**
         * @description Defines whether the action should usually be preselected.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'precheckBehavior', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.precheckBehavior,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.precheckBehavior = undefined;
                    return;
                }
                this.__data.precheckBehavior = valueProvided;
            }
        });

        /**
         * @description Defines whether the action can be selected multiple times.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'cardinalityBehavior', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.cardinalityBehavior,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.cardinalityBehavior = undefined;
                    return;
                }
                this.__data.cardinalityBehavior = valueProvided;
            }
        });

        /**
         * @description The resource that is the target of the action (e.g. CommunicationRequest).
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'resource', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.resource,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.resource = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.resource = new Reference(valueProvided);
            }
        });

        /**
         * @description Sub actions.
         * @property {RequestGroupAction[]|undefined}
        */
        Object.defineProperty(this, 'action', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.action,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.action = undefined;
                    return;
                }
                this.__data.action = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new RequestGroupAction(v)) : [new RequestGroupAction(valueProvided)];
            }
        });



        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            prefix,
            title,
            description,
            textEquivalent,
            priority,
            code,
            documentation,
            condition,
            relatedAction,
            timingDateTime,
            timingAge,
            timingPeriod,
            timingDuration,
            timingRange,
            timingTiming,
            participant,
            type,
            groupingBehavior,
            selectionBehavior,
            requiredBehavior,
            precheckBehavior,
            cardinalityBehavior,
            resource,
            action,
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
            prefix: this.prefix,
            title: this.title,
            description: this.description,
            textEquivalent: this.textEquivalent,
            priority: this.priority,
            code: this.code && this.code.map(v => v.toJSON()),
            documentation: this.documentation && this.documentation.map(v => v.toJSON()),
            condition: this.condition && this.condition.map(v => v.toJSON()),
            relatedAction: this.relatedAction && this.relatedAction.map(v => v.toJSON()),
            timingDateTime: this.timingDateTime,
            timingAge: this.timingAge && this.timingAge.toJSON(),
            timingPeriod: this.timingPeriod && this.timingPeriod.toJSON(),
            timingDuration: this.timingDuration && this.timingDuration.toJSON(),
            timingRange: this.timingRange && this.timingRange.toJSON(),
            timingTiming: this.timingTiming && this.timingTiming.toJSON(),
            participant: this.participant && this.participant.map(v => v.toJSON()),
            type: this.type && this.type.toJSON(),
            groupingBehavior: this.groupingBehavior,
            selectionBehavior: this.selectionBehavior,
            requiredBehavior: this.requiredBehavior,
            precheckBehavior: this.precheckBehavior,
            cardinalityBehavior: this.cardinalityBehavior,
            resource: this.resource && this.resource.toJSON(),
            action: this.action && this.action.map(v => v.toJSON()),
        });
    }

    /**
     * Returns JSON representation of entity
     * @param {function(Reference): Reference} fnUpdateReference
     * @return {void}
     */
    updateReferences({fnUpdateReference}) {
            if (this.extension) {this.extension.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.modifierExtension) {this.modifierExtension.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.code) {this.code.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.documentation) {this.documentation.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.condition) {this.condition.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.relatedAction) {this.relatedAction.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.timingAge) {this.timingAge.updateReferences({fnUpdateReference});}
            if (this.timingPeriod) {this.timingPeriod.updateReferences({fnUpdateReference});}
            if (this.timingDuration) {this.timingDuration.updateReferences({fnUpdateReference});}
            if (this.timingRange) {this.timingRange.updateReferences({fnUpdateReference});}
            if (this.timingTiming) {this.timingTiming.updateReferences({fnUpdateReference});}
            if (this.participant) {this.participant.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.type) {this.type.updateReferences({fnUpdateReference});}
            if (this.resource) {this.resource.updateReferences({fnUpdateReference});}
            if (this.action) {this.action.forEach(v => v.updateReferences({fnUpdateReference}));}
    }

    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSONInternal() {
        const {removeNull} = require('../../../../utils/nullRemover');
        const json = this.toJSON();


        return removeNull(json);
    }
}

module.exports = RequestGroupAction;
