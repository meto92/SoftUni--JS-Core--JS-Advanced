function createMixins() {
    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality = function() {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        }

        classToExtend.prototype.isFast = function() {
            return this.processorSpeed > this.ram / 4;
        }

        classToExtend.prototype.isRoomy = function() {
            return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed);
        }
    }
    
    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function() {
            let manufacturer = this.manufacturer;

            return manufacturer === this.keyboard.manufacturer
                && manufacturer === this.monitor.manufacturer;
        }

        classToExtend.prototype.isClassy = function() {
            return this.battery.expectedLife >= 3
                && ["Silver", "Black"].includes(this.color)
                && this.weight < 3;
        }
    }

    return {
        computerQualityMixin,
        styleMixin
    }
}