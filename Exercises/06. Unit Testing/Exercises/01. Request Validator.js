function validateRequestObj(obj) {
    function validateProperties() {
        const requiredProperties = {
            method: "Method",
            uri: "URI",
            version: "Version",
            message: "Message"
        };

        Object.keys(requiredProperties)
            .forEach(prop => {
                console.log(prop)
                if (!obj.hasOwnProperty(prop)) {
                    const errorMessage = `Invalid request header: Invalid ${requiredProperties[prop]}`;

                    throw new Error(errorMessage);
                }
        });
    }

    function validateMethod() {
        const validMethods = [
            "GET",
            "POST",
            "DELETE",
            "CONNECT"
        ];
        
        if (!validMethods.includes(obj.method)) {
            throw new Error("Invalid request header: Invalid Method");
        }
    }

    function validateURI() {
        if (!/^([a-zA-Z\d.]+|\*)$/.test(obj.uri)) {
            throw new Error("Invalid request header: Invalid URI");
        }
    }

    function validateVersion() {
        const validVersions = [
            "HTTP/0.9",
            "HTTP/1.0",
            "HTTP/1.1",
            "HTTP/2.0"
        ];

        if(!validVersions.includes(obj.version)) {
            throw new Error("Invalid request header: Invalid Version");
        }
    }

    function validateMessage() {
        if (!/^[^<>\\&'"]*$/.test(obj.message)) {
            throw new Error("Invalid request header: Invalid Message");            
        }
    }

    validateProperties();
    validateMethod();
    validateURI();
    validateVersion();
    validateMessage();

    return obj;
}