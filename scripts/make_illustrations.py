import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter

FONT_SCRIPT = "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Italic.ttf"
FONT_SERIF = "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf"


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def sunset_gradient(w, h, top, mid, bottom):
    img = Image.new("RGB", (w, h))
    px = img.load()
    for y in range(h):
        t = y / h
        if t < 0.55:
            c = lerp(top, mid, t / 0.55)
        else:
            c = lerp(mid, bottom, (t - 0.55) / 0.45)
        for x in range(w):
            px[x, y] = c
    return img


def draw_sun(draw, cx, cy, r, color):
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=color)


def draw_couple_silhouette(draw, cx, base_y, scale, color):
    # two simple standing figures, facing each other, holding hands — abstracted, not identifiable people
    for side in (-1, 1):
        hip_x = cx + side * 22 * scale
        head_r = 11 * scale
        head_cy = base_y - 150 * scale
        draw.ellipse([hip_x - head_r, head_cy - head_r, hip_x + head_r, head_cy + head_r], fill=color)
        body_top = head_cy + head_r * 0.7
        body_pts = [
            (hip_x - 16 * scale, body_top),
            (hip_x + 16 * scale, body_top),
            (hip_x + 26 * scale, base_y),
            (hip_x - 26 * scale, base_y),
        ]
        draw.polygon(body_pts, fill=color)
        arm_x2 = cx + side * 6 * scale
        arm_y2 = base_y - 60 * scale
        draw.line([(hip_x + side * 14 * scale, body_top + 10 * scale), (arm_x2, arm_y2)], fill=color, width=int(7 * scale))
    draw.ellipse([cx - 5 * scale, base_y - 64 * scale, cx + 5 * scale, base_y - 54 * scale], fill=color)


def draw_arch(draw, cx, cy, w, h, color, width):
    draw.arc([cx - w / 2, cy - h, cx + w / 2, cy + h], start=180, end=360, fill=color, width=width)
    draw.line([cx - w / 2, cy, cx - w / 2, cy + h * 0.9], fill=color, width=width)
    draw.line([cx + w / 2, cy, cx + w / 2, cy + h * 0.9], fill=color, width=width)


def make_scene(path, w, h, label):
    top = (58, 24, 40)
    mid = (150, 70, 55)
    bottom = (247, 200, 140)
    img = sunset_gradient(w, h, top, mid, bottom)
    draw = ImageDraw.Draw(img)

    draw_sun(draw, w * 0.5, h * 0.5, min(w, h) * 0.16, (255, 224, 178))
    glow = Image.new("RGB", (w, h), (0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse([w * 0.5 - w * 0.22, h * 0.5 - w * 0.22, w * 0.5 + w * 0.22, h * 0.5 + w * 0.22], fill=(255, 210, 150))
    glow = glow.filter(ImageFilter.GaussianBlur(w * 0.05))
    img = Image.blend(img, glow, 0.25)
    draw = ImageDraw.Draw(img)

    scale = min(w, h) / 700
    arch_w = w * 0.34
    draw_arch(draw, w / 2, h * 0.78, arch_w, h * 0.16, (40, 15, 22), max(2, int(6 * scale)))
    draw_couple_silhouette(draw, w / 2, h * 0.80, scale * 1.15, (30, 10, 16))

    # gold decorative dots along the base, echoing the kolam motif
    for i in range(-4, 5):
        gx = w / 2 + i * (arch_w / 9)
        draw.ellipse([gx - 2, h * 0.92 - 2, gx + 2, h * 0.92 + 2], fill=(212, 175, 55))

    try:
        font = ImageFont.truetype(FONT_SCRIPT, int(min(w, h) * 0.045))
    except Exception:
        font = ImageFont.load_default()
    bbox = draw.textbbox((0, 0), label, font=font)
    draw.text(((w - (bbox[2] - bbox[0])) / 2, h * 0.06), label, font=font, fill=(247, 230, 196))

    img.save(path, quality=92)


def draw_wreath(draw, cx, cy, r, color):
    for i in range(28):
        a = (i / 28) * 2 * math.pi
        if math.pi * 0.28 < (a % (2 * math.pi)) < math.pi * 0.72:
            continue  # gap at top for a cleaner monogram frame
        x = cx + r * math.cos(a)
        y = cy + r * math.sin(a)
        leaf_len = 13
        lx = x + leaf_len * math.cos(a + 1.0)
        ly = y + leaf_len * math.sin(a + 1.0)
        draw.line([(x, y), (lx, ly)], fill=color, width=3)
        lx2 = x + leaf_len * math.cos(a - 1.0)
        ly2 = y + leaf_len * math.sin(a - 1.0)
        draw.line([(x, y), (lx2, ly2)], fill=color, width=3)


def make_monogram_card(path, w, h, label):
    cream = (253, 248, 240)
    cream2 = (240, 226, 201)
    gold = (184, 134, 11)
    brown = (107, 74, 24)
    size = min(w, h)

    img = Image.new("RGB", (w, h), cream)
    draw = ImageDraw.Draw(img)
    for y in range(h):
        t = y / h
        c = lerp(cream, cream2, t * 0.3)
        draw.line([(0, y), (w, y)], fill=c)

    cx, cy = w / 2, h * 0.44
    draw_wreath(draw, cx, cy, size * 0.34, gold)

    try:
        font_mono = ImageFont.truetype(FONT_SERIF, int(size * 0.17))
        font_label = ImageFont.truetype(FONT_SERIF, int(size * 0.065))
    except Exception:
        font_mono = ImageFont.load_default()
        font_label = font_mono

    mono = "H & A"
    bbox = draw.textbbox((0, 0), mono, font=font_mono)
    draw.text((cx - (bbox[2] - bbox[0]) / 2, cy - (bbox[3] - bbox[1]) / 2 - size * 0.02), mono, font=font_mono, fill=brown)

    bbox2 = draw.textbbox((0, 0), label, font=font_label)
    draw.text((cx - (bbox2[2] - bbox2[0]) / 2, h * 0.80), label, font=font_label, fill=gold)
    # no baked-in border here — PhotoFrame already draws one; a border inside the image
    # too would create a nested double-frame look once composited on the page.
    img.save(path, quality=92)


make_scene("public/images/hero.jpeg", 1600, 1000, "Harikaran & Arputham")
make_scene("public/images/countdown.jpeg", 1600, 1000, "Our Journey Begins")
make_monogram_card("public/images/ceremony.jpeg", 1000, 700, "Ceremony")
make_monogram_card("public/images/reception.jpeg", 1000, 700, "Reception")
make_monogram_card("public/images/final.jpeg", 1000, 700, "With Love")
make_scene("public/images/envelope.png", 1200, 1700, "You're Invited")

print("done")
