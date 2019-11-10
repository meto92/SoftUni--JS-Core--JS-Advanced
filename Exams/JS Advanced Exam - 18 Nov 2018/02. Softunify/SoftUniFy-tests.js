const SoftUniFy = require("./SoftUniFy");
const assert = require("chai").assert;

describe("SoftUniFy", () => {
    let su = null;

    beforeEach(() => su = new SoftUniFy());

    it("shoud contain allSongs property that is initialized as an empty object", () => {
        assert.property(su, "allSongs");
        assert.equal(JSON.stringify(su.allSongs), "{}");
    });

    it("should have required functions", () => {
        const requiredFunctions = [
            "downloadSong",
            "playSong",
            "rateArtist"
        ];

        requiredFunctions.forEach(funcName => {
            assert.property(su, funcName);
            assert.isTrue(typeof su[funcName] === "function");
        });
    })

    it("should have songsList getter", () => {
        assert.property(su, "songsList");
    });

    describe(" downloadSong()", () => {
        it("should create artist obj with needed properties", () => {
            const artist = "artist";
            
            su.downloadSong(artist, "song", "lyrics");

            const artistObj = su.allSongs[artist];

            assert.property(artistObj, "rate");
            assert.property(artistObj, "votes");
            assert.property(artistObj, "songs");
        });

        it("artist object should have valid property values", () => {
            const artist = "artist";

            su.downloadSong(artist, "song", "lyrics");

            const artistObj = su.allSongs[artist];

            assert.equal(artistObj.rate, 0);
            assert.equal(artistObj.votes, 0);
            assert.equal(JSON.stringify(artistObj.songs), '["song - lyrics"]');
        });

        it("should return the object", () => {
            const result = su.downloadSong("artist", "song", "lyrics");

            assert.equal(result, su);
        });
    });

    describe("playSong()", () => {
        it("should return all songs with artists and lyrics", () => {
            su.downloadSong("artist1", "song", "lyrics1");
            su.downloadSong("artist2", "song", "lyrics2");
            su.downloadSong("artist2", "song", "lyrics3");

            const result = su.playSong("song");
            const expected = "artist1:\nsong - lyrics1\nartist2:\nsong - lyrics2\nsong - lyrics3\n"

            assert.equal(result, expected);
        });
       
        it("should return correct message when song is not found", () => {
            const song = "song name";
            const result = su.playSong(song);

            assert.equal(result, `You have not downloaded a ${song} song yet. Use SoftUniFy's function downloadSong() to change that!`);
        });
    });

    describe("songsList", () => {
        it("should return all downloaded songs", () => {
            su.downloadSong("artist", "song1", "lyrics1");
            su.downloadSong("artist", "song2", "lyrics2");
            su.downloadSong("artist", "song3", "lyrics3");

            const result = su.songsList;
            const expected = "song1 - lyrics1\nsong2 - lyrics2\nsong3 - lyrics3"

            assert.equal(result, expected);
        });

        it("should return appropriate message when there are not songs", () => {
            const result = su.songsList;
            
            assert.equal(result, "Your song list is empty");
        });
    });

    describe("rateArtist()", () => {
        it("should return 0 if there are no votes", () => {
            su.downloadSong("artist", "song", "lyrics");

            const result = su.rateArtist("artist");

            assert.equal(result, 0);
        });

        it("should return correct output", () => {
            su.downloadSong("artist", "song", "lyrics");

            su.rateArtist("artist", 4);

            const result = su.rateArtist("artist", 6);

            assert.equal(result, "5.00");
        });
    
        it("it should return correct message when given artist is not presented", () => {
            const result = su.rateArtist("artist");

            assert.equal(result, "The artist is not on your artist list.");
        });
    });
});